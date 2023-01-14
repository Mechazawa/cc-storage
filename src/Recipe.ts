export interface UseableIngredient {
    count: number;
    name: string;
    source: string;
    used: boolean | null;
}

export interface Recipe {
  name: string;
  getInput(): string[];
  getOutput(): string[];
  craft(ingredients: UseableIngredient[], count: number, output: string): void;
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

  getInput(): string[] {
    let output = [];

    // Grid is always max 3x3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; i++) {
        let item = this.grid[i][j];

        if (item) {
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

  craft(ingredients: UseableIngredient[], count: number): void 
  {
    // assume this is called through rpc on a turtle,
    // local inventory needs to be correnctly filled and then call turtle.craft() 
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

  craft(ingredients: UseableIngredient[], count: number): void 
  {
    
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
