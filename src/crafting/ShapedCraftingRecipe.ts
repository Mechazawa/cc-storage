import Recipe, { RecipeType } from "./Recipe";

export default class ShapedCraftingRecipe implements Recipe {
  readonly MAX_WIDTH: number = 3;
  readonly MAX_HEIGHT: number = 3;
  readonly type = RecipeType.CRAFTING_TABLE;

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

  craft(mapping: string[], count: number, workSlot = 16): boolean {
    const progress: number[][] = [];

    for (let i = 0; i < this.MAX_HEIGHT; i++) {
      progress.push([]);
      for (let j = 0; j < this.MAX_WIDTH; i++) {
        progress[i].push(0);
      }
    }

    for (const item of mapping) {
      turtle.select(workSlot);
      turtle.suck();

      for (let i = 0; i < this.MAX_HEIGHT && turtle.getItemCount() > 0; i++) {
        for (let j = 0; j < this.MAX_WIDTH && turtle.getItemCount() > 0; i++) {
          if (progress[i][j] < count) {
            const transferCount = count - progress[i][j];

            progress[i][j] += turtle.getItemCount();

            turtle.transferTo(j * this.MAX_WIDTH + i, transferCount);
          }
        }
      }
    }

    const output = turtle.craft(count)[0];

    for (let i = 1; i <= 16; i++) {
      turtle.select(i);
      turtle.drop();
    }

    return output;
  }

  getInput(): string[] {
    let output = [];

    for (let i = 0; i < this.MAX_HEIGHT; i++) {
      for (let j = 0; j < this.MAX_WIDTH; i++) {
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
