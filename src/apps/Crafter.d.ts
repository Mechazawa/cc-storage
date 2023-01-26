import { WrappedRPC } from "../RPC";

/** @noSelf */
export interface ServerRPC extends WrappedRPC {
  ping(): "pong";
  craft(recipeName: string, input: string[], count?: number): boolean;
}
