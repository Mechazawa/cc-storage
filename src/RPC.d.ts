/** @noSelfInFile */
export const protocol: string;
export function init(): void;
export function host(hostname: string, methods: LuaMap<string, Function>|{[key: string]: Function}): void;
export function call(client: number, method: string, args: any[]|any): any;
export function notify(client: number, method: string, args: any[]): void;
export function wrap(client: number): WrappedRPC;

/** @noSelf */
declare interface WrappedRPC {
  [key: string]: Function|undefined;
}