import { WrappedRPC } from "../RPC";
import { Resource } from "../StorageManager";

export interface ProviderRPC extends WrappedRPC {
  ping(): "pong";
  reboot(): boolean;
  take(storageName: string, key: string, count: number, slot?: number): number;
  list(): Resource[];
  count(key?: string): number;
  flushCache(): boolean;
}
