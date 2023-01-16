import Recipe from "./Recipe";

export default class RecipeManager {
  recipes: { [index: string]: Recipe } = {};

  add(recipe: Recipe): void {
    this.recipes[recipe.name] = recipe;
  }

  get(name: string): Recipe {
    return this.recipes[name];
  }

  findRecipes(item: string): Recipe[] {
    return Object.values(this.recipes).filter((r: Recipe) =>
      r.getOutput().find((i: string) => i.includes(item))
    );
  }
}
