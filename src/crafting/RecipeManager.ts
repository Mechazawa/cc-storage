import Recipe from "./Recipe";
import ShapedCraftingRecipe from "./ShapedCraftingRecipe";
import ShapelessCraftingRecipe from "./ShapelessCraftingRecipe";
import recipes from "./recipes";

export default class RecipeManager {
  recipes = new LuaMap<string, Recipe>();

  add(recipe: Recipe): void {
    this.recipes.set(recipe.name, recipe);
  }

  get(name: string): Recipe | undefined {
    return this.recipes.get(name);
  }

  has(name: string): boolean {
    return this.recipes.has(name);
  }

  findRecipes(item: string): Recipe[] {
    return Object.values(this.recipes).filter((r: Recipe) => r.getOutput().find((i: string) => i.includes(item)));
  }

  load(prefix: string = ""): void {
    const candidates = [];

    for (const type of Object.keys(recipes) as string[]) {
      if (type.startsWith(prefix)) {
        candidates.push(type);
      }
    }

    for (const type of candidates) {
      ((recipes[type] ?? []) as LuaMap<string, any>[])
        .filter((r) => typeof r.get("type") === "string" && (r.get("type") + "").startsWith(prefix))
        .map((r) =>
          ("" + r.get("type")).endsWith(":shapeless")
            ? ShapelessCraftingRecipe.deserialize(r)
            : ShapedCraftingRecipe.deserialize(r)
        )
        .forEach((r) => this.add(r));
    }
  }
}
