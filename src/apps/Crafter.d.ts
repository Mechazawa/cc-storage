import { WrappedRPC } from "../RPC";
import { RecipeType } from "../crafting/Recipe";

/** @noSelf */
export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  craft(recipeName: string, input: string[], count?: number): boolean;
  canCraft(type: RecipeType): boolean;
}
