import { ServerConfig } from "../Config";
import Queue from "../Queue";
import StorageManager from "../StorageManager";
import RecipeManager from "../crafting/RecipeManager";
import initCraftingRecipes from "../crafting/recipes/craftingTable";
import App from "./App";
import * as RPC from "../RPC";

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

    RPC.init();
    RPC.host("storage", {
      defragment: this.storage.defragment.bind(this.storage),
      storeAll: this.storage.storeAll.bind(this.storage),
      store: this.storage.store.bind(this.storage),
      withdrawl: this.storage.withdrawl.bind(this.storage),
      list: this.storage.list.bind(this.storage),
      size: this.storage.size.bind(this.storage),
      free: this.storage.free.bind(this.storage),
      used: this.storage.used.bind(this.storage),
      count: this.storage.count.bind(this.storage),
      craft: this.storage.craft.bind(this.storage),
      findItemByKey: this.storage.findItemByKey.bind(this.storage),
      findRecipes: (name: string) => {
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
}
