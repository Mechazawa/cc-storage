/** @noSelfInFile */
declare const _HOST: string;
declare var _CC_DEFAULT_SETTINGS: string;
declare function sleep(time: number): void;
declare function write(text: string): number;
declare function print(text: string): number;
declare function printError(...args: any[]): void;
declare function read(
  replaceChar?: string,
  history?: LuaMap,
  completeFn?: (partial: string) => string[] | undefined,
  _default?: string
): string;

declare const fs: FS;
declare const os: OS;
declare const colors: Colors;
declare const turtle: Turtle;
declare const peripheral: Peripheral;
declare const commands: Commands;
declare const term: Term;
declare const rednet: Rednet;
declare const textutils: Textutils;
