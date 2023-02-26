import { CrafterConfig } from "../Config";
import RecipeManager from "../crafting/RecipeManager";
import App from "./App";
import loadCraftingTableRecipes from "../crafting/recipes/craftingTable";
import RPC, { RPCRequest } from "../RPC";
import { RecipeType } from "../crafting/Recipe";
import { CrafterHost } from "../StorageManager";
import ExpiringLock from "../ExpiringLock";

export default class Crafter extends App {
  recipeManager: RecipeManager;

  declare config: CrafterConfig;

  craftLock = new ExpiringLock();

  constructor(config: CrafterConfig) {
    super(config);

    this.recipeManager = new RecipeManager();
  }

  run(): void {
    loadCraftingTableRecipes(this.recipeManager);

    const recipeCount = Object.keys(this.recipeManager.recipes).length;

    this.logger.info(`Loaded ${recipeCount} recipes`);

    parallel.waitForAny(() => this.runRPC());
  }

  runRPC() {
    RPC.openModems();
    RPC.host(this.config.hostname, {
      ping: () => "pong",
      reboot: (request, callback) => {
        callback(request, true);
        os.reboot();
      },
      craft: (request, callback, recipeName: string, input: string[], count?: number) => {
        const recipe = this.recipeManager.get(recipeName);

        if (recipe === undefined) {
          throw new Error("Unknown recipe: " + recipeName);
        }

        return recipe.craft(input, count);
      },
      lookupCrafter: (request, callback, type: RecipeType): CrafterHost | undefined => {
        const recipeTypes = (this.config as CrafterConfig).recipeTypes;

        if (!this.craftLock.locked && recipeTypes.includes(type)) {
          parallel.waitForAll(() => sleep(Math.random() / 100));

          return {
            host: os.getComputerID(),
            storageName: this.config.storage[0],
            type,
          };
        }
      },
      lock: (request, callback, timeout: number): boolean => {
        return this.craftLock.lock(timeout);
      },
      unlock: (): boolean => {
        return this.craftLock.unlock();
      },
    });
  }

  serialise(): LuaMap<string, any> {
    return {
      config: this.config,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Crafter {
    return new this(input.get("config"));
  }
}
