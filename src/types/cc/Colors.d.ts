/** @noSelf */
declare interface Colors {
  readonly white: number;
  readonly orange: number;
  readonly magenta: number;
  readonly lightBlue: number;
  readonly yellow: number;
  readonly lime: number;
  readonly pink: number;
  readonly gray: number;
  readonly lightGray: number;
  readonly cyan: number;
  readonly purple: number;
  readonly blue: number;
  readonly brown: number;
  readonly green: number;
  readonly red: number;
  readonly black: number;

  combine(...colors: number[]): number;
  subtract(color: number, ...colors: number[]): number;
  test(colors: number | number[], color: number): boolean;
  packRGB(r: number, g: number, b: number): number;
  unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
  toBlit(color: number): string;
}
