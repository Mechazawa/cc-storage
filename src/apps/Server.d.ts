import { WrappedRPC } from "../RPC";
import { Resource } from "../StorageManager";
import { TransferableRecipe } from "../crafting/Recipe";

/** @noSelf */
export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  defragment(): number;
  storeAll(storageName: string): number;
  store(storageName: string, slot: number, count?: number): number;
  withdrawl(storageName: string, key: string, count: number, slot?: number): number;
  list(): Resource[];
  size(): number;
  free(): number;
  used(): number;
  count(key?: string): number;
  craft(recipeName: string, count: number): number;
  getMaxCraftable(recipeName: string): number;
  findRecipes(name: string): TransferableRecipe[];
  flushCache(): boolean;
}
