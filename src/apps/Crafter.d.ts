import { WrappedRPC } from "../RPC";
import { CrafterHost } from "../StorageManager";
import { RecipeType } from "../crafting/Recipe";

/** @noSelf */
export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  craft(recipeName: string, input: string[], count?: number): boolean;
  /** 
   * idea: only respond id not reserved 
   * */
  lookupCrafter(type: RecipeType): CrafterHost | undefined; 
  // reserve(timeout?: number): boolean;// todo
}
