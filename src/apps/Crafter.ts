import { CrafterConfig } from "../Config";
import RecipeManager from "../crafting/RecipeManager";
import App from "./App";
import loadCraftingTableRecipes from "../crafting/recipes/craftingTable";
import RPC from "../RPC";

export default class Crafter extends App {
  recipeManager: RecipeManager;

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
    RPC.host(this.config.hostname ?? "crafter", {
      ping: () => "pong",
      craft: (request, callback, recipeName: string, input: string[], count?: number) => {
        const recipe = this.recipeManager.get(recipeName);

        if (recipe === undefined) {
          throw new Error("Unknown recipe: " + recipeName);
        }

        return recipe.craft(input, count);
      },
    });
  }

  serialise(): LuaMap<string, any> {
    return new LuaMap<string, any>();
  }

  static deserialize(input: LuaMap<string, any>): Crafter {
    return new this(input.get("config"));
  }
}
