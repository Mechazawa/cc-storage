/** @noSelf */
declare interface Peripheral {
  /**
   * Provides a list of all peripherals available.
   * @returns A list of the names of all attached peripherals.
   */
  getNames(): string[];
  /**
   * Determines if a peripheral is present with the given name.
   * @returns If a peripheral is present with the given name.
   */
  isPresent(name: string): boolean;
  /**
   * Get the types of a named or wrapped peripheral.
   */
  getType(peripheral: string|WrappedPeripheral): string[];
  /**
   * peripheral_type)	Check if a peripheral is of a particular type.
   */
  hasType(peripheral: string|WrappedPeripheral, peripheral_type: string): boolean|undefined;
  /**
   * Get all available methods for the peripheral with the given name.
   */
  getMethods(name: string): string[]|undefined;
  /**
   * Get the name of a peripheral wrapped with peripheral.wrap.
   */
  getName(peripheral: WrappedPeripheral): string;
  /**
   * Call a method on the peripheral with the given name.
   */
  call(name: string, method: string, ...args: string[]): any;
  /**
   * Get a table containing all functions available on a peripheral.
   */
  wrap(name: string): WrappedPeripheral;
  /**
   * Find all peripherals of a specific type, and return the wrapped peripherals.
   */
  find(ty: string, filter: (name: string, wrapped: WrappedPeripheral)=>boolean): LuaMultiReturn<WrappedPeripheral[]>
}

/** @noSelf */
declare interface WrappedPeripheral {
  [name: string]: Function;
}
