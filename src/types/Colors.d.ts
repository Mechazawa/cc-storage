/** @noSelf */
declare interface Colors {
  readonly white: string;
  readonly orange: string;
  readonly magenta: string;
  readonly lightBlue: string;
  readonly yellow: string;
  readonly lime: string;
  readonly pink: string;
  readonly gray: string;
  readonly lightGray: string;
  readonly cyan: string;
  readonly purple: string;
  readonly blue: string;
  readonly brown: string;
  readonly green: string;
  readonly red: string;
  readonly black: string;

  combine(...colors: number[]): number;
  subtract(color: number, ...colors: number[]): number;
  test(colors: number|number[], color: number): boolean;
  packRGB(r: number, g: number, b: number):  number;
  unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
  toBlit(color: number): string;
}