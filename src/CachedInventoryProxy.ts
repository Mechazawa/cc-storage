import Cache from "./Cache";

export default class CachedInventoryProxy implements Inventory {
  target: Inventory;
  cache: Cache;
  name: string;

  readonly prefix = "inventory";

  constructor(target: Inventory, cache: Cache, name?: string) {
    this.target = target;
    this.cache = cache;
    this.name = name ?? peripheral.getName(target);
  }

  size(): number {
    return this.cache.remember(`${this.prefix}:${this.name}:size`, () => this.target.size());
  }

  list(): LuaPairsIterable<number, { name: string; count: number }> {
    return this.cache.remember(`${this.prefix}:${this.name}:list`, () => this.target.list());
  }

  getItemDetail(slot: number): ItemStack | undefined {
    return this.cache.remember(`${this.prefix}:${this.name}:slot:${slot}:detail`, () =>
      this.target.getItemDetail(slot)
    );
  }

  getItemLimit(slot: number): number {
    return this.cache.remember(`${this.prefix}:${this.name}:slot:${slot}:limit`, () => this.target.getItemLimit(slot));
  }

  pushItems(toName: string, fromSlot: number, limit?: number | undefined, toSlot?: number | undefined): number {
    this.flushSlot(toSlot, toName);
    this.flushSlot(fromSlot);

    return this.target.pushItems(toName, fromSlot, limit, toSlot);
  }

  pullItems(fromName: string, fromSlot: number, limit?: number | undefined, toSlot?: number | undefined): number {
    this.flushSlot(fromSlot, fromName);
    this.flushSlot(toSlot);

    return this.target.pullItems(fromName, fromSlot, limit, toSlot);
  }

  flushSlot(slot: number | undefined, storageName: string = this.name) {
    if (slot !== undefined) {
      this.cache.delete(`${this.prefix}:${storageName}:slot:${slot}:*`);
    } else {
      this.cache.delete(`${this.prefix}:${storageName}:slot:*`);
    }

    this.cache.delete(`${this.prefix}:${storageName}:list`);
  }

  flush(storageName: string = this.name) {
    this.cache.delete(`${this.prefix}:${storageName}:*`);
  }
}
