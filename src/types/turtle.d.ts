/** @noSelf */
declare module "turtle" {
  export function forward(): LuaMultiReturn<[boolean, string?]>;
  export function back(): LuaMultiReturn<[boolean, string?]>;
  export function up(): LuaMultiReturn<[boolean, string?]>;
  export function down(): LuaMultiReturn<[boolean, string?]>;
  export function left(): LuaMultiReturn<[boolean, string?]>;
  export function right(): LuaMultiReturn<[boolean, string?]>;

  export function turnLeft(): LuaMultiReturn<[boolean, string?]>;
  export function turnRight(): LuaMultiReturn<[boolean, string?]>;

  export function dig(side?: string): LuaMultiReturn<[boolean, string?]>;
  export function digUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  export function digDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  export function place(text: string): LuaMultiReturn<[boolean, string?]>;
  export function placeUp(text: string): LuaMultiReturn<[boolean, string?]>;
  export function placeDown(text: string): LuaMultiReturn<[boolean, string?]>;

  export function drop(count: number): LuaMultiReturn<[boolean, string?]>;
  export function dropUp(count: number): LuaMultiReturn<[boolean, string?]>;
  export function dropDown(count: number): LuaMultiReturn<[boolean, string?]>;

  export function select(slot: number): boolean;
  export function getItemCount(slot?: number): number;
  export function getItemSpace(slot?: number): number;

  export function detect(): boolean;
  export function detectUp(): boolean;
  export function detectDown(): boolean;

  export function compare(): boolean;
  export function compareUp(): boolean;
  export function compareDown(): boolean;

  export function attack(side?: string): LuaMultiReturn<[boolean, string?]>;
  export function attackUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  export function attackDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  export function suck(count?: number): LuaMultiReturn<[boolean, string?]>;
  export function suckUp(count?: number): LuaMultiReturn<[boolean, string?]>;
  export function suckDown(count?: number): LuaMultiReturn<[boolean, string?]>;

  export function getFuelLevel(): number|string;
  export function refuel(count?: number): LuaMultiReturn<[boolean, string?]>

  export function compareTo(slot: number): boolean;
  export function transferTo(slot: number, count?: number): boolean;

  export function getSelectedSlot(): number;
  export function getFuelLimit(): number|string;

  export function equipLeft(): LuaMultiReturn<[boolean, string?]>;
  export function equipRight(): LuaMultiReturn<[boolean, string?]>;

  export function inspect(): LuaMultiReturn<[boolean, string|LuaMap]>;
  export function inspectUp(): LuaMultiReturn<[boolean, string|LuaMap]>;
  export function inspectDown(): LuaMultiReturn<[boolean, string|LuaMap]>;

  export function getItemDetail(slot?: number, detailed?: boolean): undefined|LuaMap;
}