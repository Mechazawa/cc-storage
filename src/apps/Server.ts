import { ServerConfig } from "../Config";
import Queue, { JobProgress } from "../Queue";
import StorageManager from "../StorageManager";
import RecipeManager from "../crafting/RecipeManager";
import App from "./App";
import RPC, { RPCRequest } from "../RPC";
import Cache from "../Cache";
import ThreadPool from "../util/threading/ThreadPool";
import CraftingProvider from "../crafting/CraftingProvider";
import SmeltingProvider, { isSmelter } from "../smelting/SmeltingProvider";

const RPC_CALLBACK = "rpc";

export default class Server extends App {
  storage: StorageManager;
  crafting: CraftingProvider;
  smelting: SmeltingProvider;
  storageQueue: Queue<StorageManager>;
  craftingQueue: Queue<CraftingProvider>;
  smeltQueue: Queue<SmeltingProvider>;
  nextDefrag: number = -1;
  cache = new Cache();

  declare config: ServerConfig;

  constructor(config: ServerConfig) {
    super(config);

    Queue.callbacks.set(RPC_CALLBACK, (request: RPCRequest, value: any, success?: boolean) =>
      RPC.callback(request, value, success),
    );

    const recipeManager = new RecipeManager();

    recipeManager.load();

    this.storage = new StorageManager(this.cache, this.logger);
    this.crafting = new CraftingProvider(this.storage, recipeManager, this.cache, this.logger);
    this.smelting = new SmeltingProvider(this.storage, this.logger);

    this.storageQueue = new Queue(this.storage);
    this.craftingQueue = new Queue(this.crafting);
    this.smeltQueue = new Queue(this.smelting);
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
    this.logger.info(`Found ${this.smelting.discover()} furnaces`);

    let storageCount = 0;

    for (const storageName of this.config.storage) {
      // A smelter's slots are input, fuel and output rather than free space
      if (isSmelter(storageName)) {
        continue;
      }

      storageCount += this.storage.addStorage(storageName) ? 1 : 0;
    }

    this.logger.info(`Initialised ${storageCount} storage containers`);
    this.logger.info(`Reclaimed ${this.smelting.reclaimAll()} items left in furnaces`);

    this.storageQueue.notifyFailed();

    parallel.waitForAny(
      () => this.runRPC(),
      // @todo decide if I want to have queue worker count configurable
      () => this.runQueueWorker(),
      // Their own workers because a batch of either runs for minutes, and everything else has to
      // stay answerable while it does
      () => this.runCraftWorker(),
      () => this.runSmeltWorker(),
      () => this.runDefragLoop(),
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
        this.storageQueue.push({ method: "defragment", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      storeAll: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "storeAll", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      store: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "store", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      take: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "take", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      list: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "list", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      size: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "size", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      free: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "free", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      used: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "used", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      count: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "count", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      index: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "index", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      fragmented: (request, callback, ...params: any[]) => {
        this.storageQueue.push({ method: "fragmented", params, callback: RPC_CALLBACK, callbackArgs: [request] });
      },
      // Queued without a callback: a batch runs for minutes, so the caller is told it started and
      // reads the rest back from `jobs`
      smelt: (request, callback, ...params: any[]) => this.smeltQueue.push({ method: "smelt", params }),
      jobs: () => this.jobs(),
      fuelAdd: (request, callback, item: string, minKept?: number, priority?: number) =>
        this.smelting.fuel.add(item, minKept, priority),
      fuelRemove: (request, callback, item: string) => this.smelting.fuel.remove(item),
      fuelList: () => this.smelting.fuel.entries,
      craft: (request, callback, ...params: any[]) => this.craftingQueue.push({ method: "craft", params }),
      // Answered here rather than queued: it is a read, and the queue behind it holds long jobs
      listCraftable: () => this.crafting.list(),
      cacheSize: () => this.storage.cache.size(),
      flushCache: () => {
        this.storage.cache.flush();

        return true;
      },
    });
  }

  jobs(): JobProgress[] {
    return [
      ...this._queueJobs(this.smeltQueue, () => this.smelting.progress()),
      ...this._queueJobs(this.craftingQueue, () => this.crafting.progress()),
    ];
  }

  /** Only the job on the worker knows how far along it is; the ones behind it know what was asked. */
  _queueJobs<T extends object>(queue: Queue<T>, progress: () => JobProgress): JobProgress[] {
    const output = queue.running.map(() => progress());

    for (const job of queue.queue) {
      output.push({
        name: `${job.method as string}`,
        target: `${job.params[0]}`,
        done: 0,
        total: Number(job.params[1] ?? 0),
      });
    }

    for (const failure of queue.takeFailures()) {
      output.push({
        name: `${failure.method as string}`,
        target: `${failure.params[0]}`,
        done: 0,
        total: 0,
        error: `${failure.reason}`,
      });
    }

    return output;
  }

  runQueueWorker() {
    // todo: why?????
    this.storageQueue.handler = this.storage;

    while (true) {
      this.storageQueue.work();
      os.sleep(0.5);
    }
  }

  runCraftWorker() {
    while (true) {
      this.craftingQueue.work();
      os.sleep(0.5);
    }
  }

  runSmeltWorker() {
    while (true) {
      this.smeltQueue.work();
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
