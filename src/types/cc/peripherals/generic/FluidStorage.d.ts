/** @noSelf */
declare interface FluidStorage extends WrappedPeripheral {
  /**
   * Get all "tanks" in this fluid storage.
   */
  tanks(): (LuaMap | undefined)[];

  /**
   * Move a fluid from one fluid container to another connected one.
   *
   * @param toName    string The name of the peripheral/container to push to. This is the string given to peripheral.wrap, and displayed by the wired modem.
   * @param limit     number The maximum amount of fluid to move.
   * @param fluidName string The fluid to move. If not given, an arbitrary fluid will be chosen.
   * @returns The amount of moved fluid.
   */
  pushFluid(toName: string, limit: number, fluidName: string): number;

  /**
   * Move a fluid from a connected fluid container into this oneone.
   *
   * @param fromName  The name of the peripheral/container to push to. This is the string given to peripheral.wrap, and displayed by the wired modem.
   * @param limit     The maximum amount of fluid to move.
   * @param fluidName The fluid to move. If not given, an arbitrary fluid will be chosen.
   * @returns The amount of moved fluid.
   */
  pullFluid(fromName: string, limit: number, fluidName: string): number;
}
