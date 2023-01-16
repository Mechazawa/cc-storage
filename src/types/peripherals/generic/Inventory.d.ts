/** @noSelf */
declare interface Inventory extends WrappedPeripheral {
  /**
   * Get the size of this inventory.
   * @returns The number of slots in this inventory.
   */
  size(): number;

  /**
   * List all items in this inventory.
   * @returns All items in this inventory.
   */
  list(): LuaPairsIterable<number, {name: string, count: number}>;

  /**
   * Get detailed information about an item.
   * @param slot The slot to get information about.
   * @returns Information about the item in this slot, or nil if not present.
   */
  getItemDetail(slot: number): undefined|ItemStack;

  /**
   * Get the maximum number of items which can be stored in this slot.
   * @param slot number The slot
   * @returns The maximum number of items in this slot.
   */
  getItemLimit(slot: number): number;

  /**
   * Push items from one inventory to another connected one.
   *
   * @param toName   The name of the peripheral/inventory to push to. This is the string given to peripheral.wrap, and displayed by the wired modem.
   * @param fromSlot The slot in the current inventory to move items to.
   * @param limit    The maximum number of items to move. Defaults to the current stack limit.
   * @param toSlot   The slot in the target inventory to move to. If not given, the item will be inserted into any slot.
   * @returns The number of transferred items.
   */
  pushItems(
    toName: string,
    fromSlot: number,
    limit?: number,
    toSlot?: number
  ): number;

  /**
   * Pull items from a connected inventory into this one.
   *
   * @param fromName The name of the peripheral/inventory to pull from. This is the string given to peripheral.wrap, and displayed by the wired modem.
   * @param fromSlot The slot in the source inventory to move items from.
   * @param limit    The maximum number of items to move. Defaults to the current stack limit.
   * @param toSlot   The slot in current inventory to move to. If not given, the item will be inserted into any slot.
   * @returns The number of transferred items.
   */
  pullItems(
    fromName: string,
    fromSlot: number,
    limit?: number,
    toSlot?: number
  ): number;
}
