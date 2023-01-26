export enum RecipeType {
  CRAFTING_TABLE = "crafting",
}

export interface TransferableRecipe {
  readonly type: RecipeType;
  name: string;
}

export default interface Recipe extends TransferableRecipe {
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
