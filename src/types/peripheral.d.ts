/** @noSelf */
declare module "peripheral" {
  /**
   * Provides a list of all peripherals available.
   * @returns A list of the names of all attached peripherals.
   */
  export function getNames(): string[];
  /**
   * Determines if a peripheral is present with the given name.
   * @returns If a peripheral is present with the given name.
   */
  export function isPresent(name: string): boolean;
  /**
   * Get the types of a named or wrapped peripheral.
   */
  export function getType(peripheral: string|Peripheral): string[];
  /**
   * peripheral_type)	Check if a peripheral is of a particular type.
   */
  export function hasType(peripheral: string|Peripheral, peripheral_type: string): boolean|undefined;
  /**
   * Get all available methods for the peripheral with the given name.
   */
  export function getMethods(name: string): string[]|undefined;
  /**
   * Get the name of a peripheral wrapped with peripheral.wrap.
   */
  export function getName(peripheral: Peripheral): string;
  /**
   * Call a method on the peripheral with the given name.
   */
  export function call(name: string, method: string, ...args: string[]): any;
  /**
   * Get a table containing all functions available on a peripheral.
   */
  export function wrap(name: string): Peripheral;
  /**
   * Find all peripherals of a specific type, and return the wrapped peripherals.
   */
  export function find(ty: string, filter: (name: string, wrapped: Peripheral)=>boolean): LuaMultiReturn<Peripheral[]>

  export interface Peripheral {}
}