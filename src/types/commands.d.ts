/** @noSelf */
declare module "commands" {
  export function exec(command: string): LuaMultiReturn<[boolean, string[], number?]>;
  export function execAsync(command: string): number;
  export function list(...subCommand: string[]): string[];
  export function getBlockPosition(): LuaMultiReturn<[number, number, number]>;
  export function getBlockInfos(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number , dimension?: string): LuaMap;
}