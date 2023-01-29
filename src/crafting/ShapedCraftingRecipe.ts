import Logger from "../Logger";
import Recipe, { RecipeType, TURTLE_INVENTORY_COLS } from "./Recipe";

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

  craft(mapping: string[], count: number = 1): boolean {
    const progress: boolean[][] = [];

    for (let i = 0; i < this.MAX_HEIGHT; i++) {
      const row = [];
      for (let j = 0; j < this.MAX_WIDTH; j++) {
        row.push(false);
      }

      progress.push(row);
    }

    const usedSlots = [];

    for (const item of mapping) {
      let found = false;

      for (let i = 0; !found && i < this.MAX_HEIGHT; i++) {
        for (let j = 0; !found && j < this.MAX_WIDTH; j++) {
          const gridItem = this.grid[i]?.[j];

          if (progress[i][j] === false && gridItem === item) {
            const slot = 1 + j + i * TURTLE_INVENTORY_COLS;

            turtle.select(slot);
            turtle.suck(count);
            usedSlots.push(slot);

            progress[i][j] = true;
            found = true;
          }
        }
      }

      if (!found) {
        throw new Error(`Could not find where to place ${item}`);
      }
    }

    const output = turtle.craft(count)[0];

    // No need to iterate over all slots if the crafting was successful
    if (output) {
      turtle.drop();
      return true;
    }

    for (const slot of usedSlots) {
      turtle.select(slot);
      turtle.drop();
    }

    return false;
  }

  getInput(): string[] {
    let output = [];

    for (let i = 0; i < this.MAX_HEIGHT; i++) {
      for (let j = 0; j < this.MAX_WIDTH; j++) {
        let item = this.grid[i]?.[j];

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
