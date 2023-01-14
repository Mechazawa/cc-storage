import * as turtle from 'turtle';
import * as peripheral from 'peripheral';
import { Inventory } from './types/peripherals/generic/inventory';

class IngredientBundle {
  ingredients: Ingredient[];
  used: number[];

  constructor(ingredients: Ingredient[] = []) {
    this.ingredients = ingredients;
    this.used = [];

    for (let i = 0; i < this.ingredients.length; i++) {
      this.used.push(0);
    }
  }

  reserve(name: string, count: number = 1): Ingredient {
    const index = this.ingredients.findIndex(
      (v, i) => count <= v.count - this.used[i] && v.name === name
    );

    if (index === -1) {
      throw `Missing ${count} of "${name}"`;
    }

    this.used[index] += count;

    return this.ingredients[index];
  }
}

export interface Ingredient {
  name: string;
  count: number;
  source: string;
}

export interface Recipe {
  name: string;
  getInput(): string[];
  getOutput(): string[];

  // returns slot nr
  craft(ingredients: Ingredient[], count: number, output: string): number;
}

export class ShapedCraftingRecipe implements Recipe {
  name: string;
  output: string;
  count: number;
  grid: string[][];

  constructor(name: string, output: string, count: number, grid: string[][]) {
    this.name = name;
    this.output = output;
    this.count = count;
    this.grid = grid;
  }
 
  craft(ingredients: Ingredient[], count: number, output: string): number {
    throw new Error("Method not implemented.");
    // assume this is called through rpc on a turtle,
    // local inventory needs to be correnctly filled and then call turtle.craft()

    turtle.dig();
  }

  getInput(): string[] {
    let output = [];

    // Grid is always max 3x3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; i++) {
        let item = this.grid[i][j];

        if (item && item !== "") {
          output.push(item);
        }
      }
    }

    return output;
  }

  getOutput(): string[] {
    let output = [];

    for (let i = 0; i < this.count; i++) {
      output.push(this.output);
    }

    return output;
  }
}

export class ShapelessCraftingRecipe implements Recipe {
  name: string;
  output: string;
  count: number;
  grid: string[];

  constructor(name: string, output: string, count: number, grid: string[]) {
    this.name = name;
    this.output = output;
    this.count = count;
    this.grid = grid;
  }
 
  // @todo use storage manager for storing the output to avoid racing
  craft(ingredients: Ingredient[], count: number, output: string): number {
    // ingredients must be stored in a chest that the bot can access?
    const i = peripheral.wrap(output) as Inventory;
    return 0;
  }

  getInput(): string[] {
    return this.grid;
  }

  getOutput(): string[] {
    let output = [];

    for (let i = 0; i < this.count; i++) {
      output.push(this.output);
    }

    return output;
  }
}

export class RecipeManager {
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
