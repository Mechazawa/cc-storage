import { WrappedRPC } from "../RPC";
import { Resource } from "../StorageManager";
import { TransferableRecipe } from "../crafting/Recipe";
import { FuelEntry } from "../smelting/FuelRegistry";
import { JobProgress } from "../Queue";

export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  reboot(): boolean;
  defragment(): number;
  storeAll(storageName: string): number;
  store(storageName: string, slot: number, count?: number): number;
  take(storageName: string, key: string, count: number | "all", slot?: number): number;
  list(): Resource[];
  size(): number;
  free(): number;
  used(): number;
  count(key?: string): number;
  index(): number;
  fragmented(): number;
  craft(recipeName: string, count?: number): boolean;
  smelt(key: string, count: number): boolean;
  jobs(): JobProgress[];
  fuelAdd(item: string, minKept?: number, priority?: number): FuelEntry;
  fuelRemove(item: string): boolean;
  fuelList(): FuelEntry[];
  listCraftable(): TransferableRecipe[];
  cacheSize(): number;
  flushCache(): boolean;
}
