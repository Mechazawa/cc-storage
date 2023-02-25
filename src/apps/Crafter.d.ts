import { WrappedRPC } from "../RPC";
import { CrafterHost } from "../StorageManager";
import { RecipeType } from "../crafting/Recipe";

/** @noSelf */
export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  reboot(): boolean;
  craft(recipeName: string, input: string[], count?: number): boolean;
  lookupCrafter(type: RecipeType): CrafterHost | undefined;
  lock(timeout: number): boolean;
}
