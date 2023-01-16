/** @noSelf */
declare interface EnergyStorage extends WrappedPeripheral {
  /** 
   * Get the energy of this block.
   * @returns The energy stored in this block, in FE.
   */
  getEnergy(): number;

  /**
   * Get the maximum amount of energy this block can store.
   * @returns The energy capacity of this block.
   */
  getEnergyCapacity(): number;
}