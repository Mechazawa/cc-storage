import { ServerConfig } from "../Config";
import Queue from "../Queue";
import StorageManager from "../StorageManager";
import RecipeManager from "../crafting/RecipeManager";
import App from "./App";
import RPC from "../RPC";
import Cache from "../Cache";
import ThreadPool from "../util/threading/ThreadPool";
import CraftingProvider from "../crafting/CraftingProvider";

export default class Server extends App {
  storage: StorageManager;
  crafting: CraftingProvider;
  storageQueue: Queue<StorageManager>;
  craftingQueue: Queue<CraftingProvider>;
  nextDefrag: number = -1;
  cache = new Cache();

  declare config: ServerConfig;

  constructor(config: ServerConfig) {
    super(config);

    const recipeManager = new RecipeManager();

    recipeManager.load();

    this.storage = new StorageManager(this.cache, this.logger);
    this.crafting = new CraftingProvider(this.storage, recipeManager, this.cache, this.logger);

    this.storageQueue = new Queue(this.storage);
    this.craftingQueue = new Queue(this.crafting);
  }

  serialize(): LuaMap<string, any> {
    return {
      queue: this.storageQueue.serialize(),
      config: this.config,
      nextDefrag: this.nextDefrag,

      // Optional
      // cache: this.storage.cache.serialise(),
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Server {
    const instance = new this(input.get("config"));

    instance.storageQueue = Queue.deserialize(input.get("queue")) as Queue<StorageManager>;
    instance.nextDefrag = input.get("nextDefrag");

    if (input.has("cache")) {
      print("Recovered cache");

      instance.storage.cache = Cache.deserialize(input.get("cache"));
    }

    return instance;
  }

  run(): void {
    const recipeCount = Object.keys(this.crafting.recipeManager.recipes).length;

    this.logger.info(`Loaded ${recipeCount} recipes`);

    let storageCount = 0;

    for (const storageName of this.config.storage) {
      storageCount += this.storage.addStorage(storageName) ? 1 : 0;
    }

    this.logger.info(`Initialised ${storageCount} storage containers`);

    this.storageQueue.notifyFailed();

    parallel.waitForAny(
      () => this.runRPC(),
      // @todo decide if I want to have queue worker count configurable
      () => this.runQueueWorker(),
      () => this.runQueueWorker(),
      () => this.runDefragLoop()
    );
  }

  runRPC() {
    RPC.openModems();
    RPC.host(this.config.hostname, {
      ping: () => "pong",
      reboot: (request, callback) => {
        callback(request, true);
        os.reboot();
      },
      defragment: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "defragment", params, callback, callbackArgs: [request] });
      },
      storeAll: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "storeAll", params, callback, callbackArgs: [request] });
      },
      store: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "store", params, callback, callbackArgs: [request] });
      },
      take: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "take", params, callback, callbackArgs: [request] });
      },
      list: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "list", params, callback, callbackArgs: [request] });
      },
      size: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "size", params, callback, callbackArgs: [request] });
      },
      free: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "free", params, callback, callbackArgs: [request] });
      },
      used: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "used", params, callback, callbackArgs: [request] });
      },
      count: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "count", params, callback, callbackArgs: [request] });
      },
      craft: (request, callback, ...params: any[]) => {
        this.craftingQueue.push({ method: "craft", params, callback, callbackArgs: [request] });
      },
      listCraftable: (request, callback, ...params: any[]) => {
        this.craftingQueue.push({ method: "list", params, callback, callbackArgs: [request] });
      },
      cacheSize: () => this.storage.cache.size(),
      flushCache: () => {
        this.storage.cache.flush();

        return true;
      },
    });
  }

  runQueueWorker() {
    // todo: why?????
    this.storageQueue.handler = this.storage;
    this.craftingQueue.handler = this.crafting;

    while (true) {
      this.storageQueue.work();
      this.craftingQueue.work();
      os.sleep(0.5);
    }
  }

  runDefragLoop() {
    while (true) {
      if (this.nextDefrag === 0) {
        this.logger.info("Running defragmentation...");

        const count = this.storage.defragment();

        this.logger.info(`Freed ${count} slots`);
      }

      // By default it's set to -1 so this will initialise it if needed aswell
      if (this.nextDefrag <= 0) {
        this.nextDefrag = (this.config as ServerConfig).defragInterval ?? 600;
      }

      this.nextDefrag--;

      os.sleep(1);
    }
  }
}
