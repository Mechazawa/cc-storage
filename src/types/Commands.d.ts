/** @noSelf */
declare class Commands {
  exec(command: string): LuaMultiReturn<[boolean, string[], number?]>;
  execAsync(command: string): number;
  list(...subCommand: string[]): string[];
  getBlockPosition(): LuaMultiReturn<[number, number, number]>;
  getBlockInfos(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number , dimension?: string): LuaMap;
}