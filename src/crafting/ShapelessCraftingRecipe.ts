import Recipe, { RecipeType } from "./Recipe";

export default class ShapelessCraftingRecipe implements Recipe {
  readonly MAX_WIDTH: number = 4;
  readonly MAX_HEIGHT: number = 4;
  readonly type = RecipeType.CRAFTING_TABLE;

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

  craft(mapping: string[], count?: number): boolean {
    turtle.select(0);
    while (turtle.suck()[0]);

    const output = turtle.craft(count)[0];

    for (let i = 1; i <= this.MAX_HEIGHT * this.MAX_WIDTH; i++) {
      turtle.select(i);
      turtle.drop();
    }

    return output;
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
