import Recipe from "./Recipe";

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
}
