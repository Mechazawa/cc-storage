import Recipe from "./Recipe";

export default class RecipeManager {
  recipes: { [index: string]: Recipe } = {};

  add(recipe: Recipe): void {
    this.recipes[recipe.name] = recipe;
  }

  get(name: string): Recipe | undefined {
    return this.recipes[name];
  }

  has(name: string): boolean {
    return this.get(name) !== undefined;
  }

  findRecipes(item: string): Recipe[] {
    return Object.values(this.recipes).filter((r: Recipe) => r.getOutput().find((i: string) => i.includes(item)));
  }
}
