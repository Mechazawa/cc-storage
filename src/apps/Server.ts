import { ServerConfig } from "../Config";
import Queue from "../Queue";
import StorageManager from "../StorageManager";
import RecipeManager from "../crafting/RecipeManager";
import loadCraftingTableRecipes from "../crafting/recipes/craftingTable";
import App from "./App";
import RPC from "../RPC";
import Cache from "../Cache";

export default class Server extends App {
  storage: StorageManager;
  queue: Queue<StorageManager>;
  nextDefrag: number = -1;

  declare config: ServerConfig;

  constructor(config: ServerConfig) {
    super(config);

    const recipeManager = new RecipeManager();

    this.storage = new StorageManager(recipeManager, this.logger);
    this.queue = new Queue(this.storage);
  }

  serialise(): LuaMap<string, any> {
    return {
      queue: this.queue.serialise(),
      config: this.config,
      nextDefrag: this.nextDefrag,

      // Optional, todo: benchmark
      // cache: this.storage.cache.serialise(),
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Server {
    const instance = new this(input.get("config"));

    instance.queue = Queue.deserialize(input.get("queue")) as Queue<StorageManager>;
    instance.nextDefrag = input.get("nextDefrag");

    if (input.has("cache")) {
      print("Recovered cache");

      instance.storage.cache = Cache.deserialize(input.get("cache"));
    }

    return instance;
  }

  run(): void {
    loadCraftingTableRecipes(this.storage.recipeManager);

    const recipeCount = Object.keys(this.storage.recipeManager.recipes).length;

    this.logger.info(`Loaded ${recipeCount} recipes`);

    let storageCount = 0;

    for (const storageName of this.config.storage) {
      storageCount += this.storage.addStorage(storageName) ? 1 : 0;
    }

    this.logger.info(`Initialised ${storageCount} storage containers`);
    
    parallel.waitForAny(
      () => this.runRPC(),
      () => this.runQueueWorker(),
      () => this.runDefragLoop()
    );
  }

  runRPC() {
    RPC.openModems();
    RPC.host(this.config.hostname, {
      ping: (request, callback) => callback(request, "pong"),
      defragment: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "defragment", params, callback, callbackArgs: [request] });
      },
      storeAll: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "storeAll", params, callback, callbackArgs: [request] });
      },
      store: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "store", params, callback, callbackArgs: [request] });
      },
      take: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "take", params, callback, callbackArgs: [request] });
      },
      list: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "list", params, callback, callbackArgs: [request] });
      },
      size: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "size", params, callback, callbackArgs: [request] });
      },
      free: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "free", params, callback, callbackArgs: [request] });
      },
      used: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "used", params, callback, callbackArgs: [request] });
      },
      count: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "count", params, callback, callbackArgs: [request] });
      },
      craft: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "craft", params, callback, callbackArgs: [request] });
      },
      // For debugging
      // findItemByKey: (request, callback, ...params: any[]) => {
      //   this.queue.push({ method: "findItemByKey", params, callback, callbackArgs: [request] });
      // },
      listCraftable: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "listCraftable", params, callback, callbackArgs: [request] });
      },
      flushCache: () => {
        this.storage.cache.flush();

        return true;
      },
    });
  }

  runQueueWorker() {
    // todo: why?????
    this.queue.handler = this.storage;

    while (true) {
      this.queue.work();

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
