import Serializable from "../Serializable";
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
  
  serialize(): LuaMap<string, any> {
    return {
      type: this.type + ':shapeless',
      name: this.name,
      output: this.output,
      count: this.count,
      grid: this.grid,
    } as unknown as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): ShapelessCraftingRecipe {
    return new this(
      input.get('name'),
      input.get('output'),
      input.get('count'),
      input.get('grid'),
    );
  }

  craft(mapping: string[], count: number = 1): boolean {
    const usedSlots = [];

    for (let i = 0; i < this.grid.length; i++) {
      const slot = i + 1;

      usedSlots.push(slot);
      turtle.select(slot);
      turtle.suck(count);
    }

    const [output, failReason] = turtle.craft(count);

    for (let slot = 1; slot <= 16; slot++) {
      if (turtle.getItemCount(slot) > 0) {
        turtle.select(slot);
        turtle.drop();
      }
    }

    if (failReason !== undefined) {
      throw new Error(failReason);
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
