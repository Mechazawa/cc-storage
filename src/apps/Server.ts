import { ServerConfig } from "../Config";
import Queue from "../Queue";
import StorageManager from "../StorageManager";
import RecipeManager from "../crafting/RecipeManager";
import initCraftingRecipes from "../crafting/recipes/craftingTable";
import App from "./App";
import RPC from "../RPC";

export default class Server extends App {
  storage: StorageManager;
  queue: Queue<StorageManager>;
  nextDefrag: number;

  constructor(config: ServerConfig) {
    super(config);

    const recipeManager = new RecipeManager();

    this.storage = new StorageManager(recipeManager, this.logger);
    this.queue = new Queue(this.storage);
    this.nextDefrag = os.epoch("utc") + (config.defragInterval ?? 600) * 1000;
  }

  serialise(): LuaMap<string, any> {
    return {
      queue: this.queue.serialise(),
      config: this.config,
      nextDefrag: this.nextDefrag,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Server {
    const instance = new this(input.get("config"));

    instance.queue = Queue.deserialize(input.get("queue")) as Queue<StorageManager>;
    instance.nextDefrag = input.get("nextDefrag");

    return instance;
  }

  run(): void {
    initCraftingRecipes(this.storage.recipeManager);

    const recipeCount = Object.keys(this.storage.recipeManager.recipes).length;

    this.logger.info(`Loaded ${recipeCount} recipes`);

    for (const storageName of this.config.storage) {
      this.storage.addStorage(storageName);
    }

    this.logger.log(`Slots used: ${this.storage.used()}/${this.storage.size()} (${this.storage.count()} items)`);

    parallel.waitForAny(
      () => this.runRPC(),
      () => this.runQueueWorker()
    );
  }

  runRPC() {
    RPC.openModems();
    RPC.host("storage", {
      ping: () => "pong",
      defragment: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "defragment", params, callback, callbackArgs: [request] });
      },
      storeAll: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "storeAll", params, callback, callbackArgs: [request] });
      },
      store: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "store", params, callback, callbackArgs: [request] });
      },
      withdrawl: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "withdrawl", params, callback, callbackArgs: [request] });
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
      findItemByKey: (request, callback, ...params: any[]) => {
        this.queue.push({ method: "findItemByKey", params, callback, callbackArgs: [request] });
      },
      findRecipes: (request, callback, name: string) => {
        const recipes = this.storage.recipeManager.findRecipes(name);

        return recipes.map((recipe) => ({
          type: recipe.type,
          name: recipe.name,
          input: recipe.getInput(),
          output: recipe.getOutput(),
        }));
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
}
