import Serializable from "../Serializable";

export enum RecipeType {
  CRAFTING_TABLE = "crafting",
}

// todo: make name less generic, and move to StorageManager?
export interface TransferableRecipe {
  readonly type: RecipeType;
  name: string;
  input: string[];
  output: string[];
  count: number;
}

// todo: move somewhere more sane
export const TURTLE_INVENTORY_ROWS = 4;
export const TURTLE_INVENTORY_COLS = 4;

export default interface Recipe extends Serializable {
  readonly type: RecipeType;
  name: string;

  getInput(): string[];
  getOutput(): string[];

  /**
   * Craft items
   * This method is called by a turtle facing a chest pre-populated with items
   * @param mapping A list of the names of the items as described in the recipe in the order that they are present in the inventory in front of the turtle
   * @param count Attempt to craft n items
   * @returns If the crafting was successful
   */
  craft(mapping: string[], count?: number): boolean;
}
