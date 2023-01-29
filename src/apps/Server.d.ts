import { WrappedRPC } from "../RPC";
import { Resource } from "../StorageManager";
import { TransferableRecipe } from "../crafting/Recipe";

export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  defragment(): number;
  storeAll(storageName: string): number;
  store(storageName: string, slot: number, count?: number): number;
  take(storageName: string, key: string, count: number, slot?: number): number;
  list(): Resource[];
  size(): number;
  free(): number;
  used(): number;
  count(key?: string): number;
  craft(recipeName: string, count?: number): number;
  listCraftable(): TransferableRecipe[];
  cacheSize(): number;
  flushCache(): boolean;
}
