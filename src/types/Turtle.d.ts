/** @noSelf */
declare interface Turtle {
  craft(count?: number): LuaMultiReturn<[boolean, string?]>;

  forward(): LuaMultiReturn<[boolean, string?]>;
  back(): LuaMultiReturn<[boolean, string?]>;
  up(): LuaMultiReturn<[boolean, string?]>;
  down(): LuaMultiReturn<[boolean, string?]>;
  left(): LuaMultiReturn<[boolean, string?]>;
  right(): LuaMultiReturn<[boolean, string?]>;

  turnLeft(): LuaMultiReturn<[boolean, string?]>;
  turnRight(): LuaMultiReturn<[boolean, string?]>;

  dig(side?: string): LuaMultiReturn<[boolean, string?]>;
  digUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  digDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  place(text?: string): LuaMultiReturn<[boolean, string?]>;
  placeUp(text?: string): LuaMultiReturn<[boolean, string?]>;
  placeDown(text?: string): LuaMultiReturn<[boolean, string?]>;

  drop(count?: number): LuaMultiReturn<[boolean, string?]>;
  dropUp(count?: number): LuaMultiReturn<[boolean, string?]>;
  dropDown(count?: number): LuaMultiReturn<[boolean, string?]>;

  select(slot: number): boolean;
  getItemCount(slot?: number): number;
  getItemSpace(slot?: number): number;

  detect(): boolean;
  detectUp(): boolean;
  detectDown(): boolean;

  compare(): boolean;
  compareUp(): boolean;
  compareDown(): boolean;

  attack(side?: string): LuaMultiReturn<[boolean, string?]>;
  attackUp(side?: string): LuaMultiReturn<[boolean, string?]>;
  attackDown(side?: string): LuaMultiReturn<[boolean, string?]>;

  suck(count?: number): LuaMultiReturn<[boolean, string?]>;
  suckUp(count?: number): LuaMultiReturn<[boolean, string?]>;
  suckDown(count?: number): LuaMultiReturn<[boolean, string?]>;

  getFuelLevel(): number|string;
  refuel(count?: number): LuaMultiReturn<[boolean, string?]>

  compareTo(slot: number): boolean;
  transferTo(slot: number, count?: number): boolean;

  getSelectedSlot(): number;
  getFuelLimit(): number|string;

  equipLeft(): LuaMultiReturn<[boolean, string?]>;
  equipRight(): LuaMultiReturn<[boolean, string?]>;

  inspect(): LuaMultiReturn<[boolean, string|LuaMap]>;
  inspectUp(): LuaMultiReturn<[boolean, string|LuaMap]>;
  inspectDown(): LuaMultiReturn<[boolean, string|LuaMap]>;

  getItemDetail(slot?: number, detailed?: boolean): undefined|ItemStack;
}