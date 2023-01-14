/** @noSelf */
declare module "colors" {
  export const white: string;
  export const orange: string;
  export const magenta: string;
  export const lightBlue: string;
  export const yellow: string;
  export const lime: string;
  export const pink: string;
  export const gray: string;
  export const lightGray: string;
  export const cyan: string;
  export const purple: string;
  export const blue: string;
  export const brown: string;
  export const green: string;
  export const red: string;
  export const black: string;

  export function combine(...colors: number[]): number;
  export function subtract(color: number, ...colors: number[]): number;
  export function test(colors: number|number[], color: number): boolean;
  export function packRGB(r: number, g: number, b: number):  number;
  export function unpackRGB(rgb: number): LuaMultiReturn<[number, number, number]>;
  export function toBlit(color: number): string;
}