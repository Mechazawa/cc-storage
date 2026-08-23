import Cache from "./Cache";
import ThreadPool from "./util/threading/ThreadPool";

/** The inventory peripheral always answers with the detailed form, unlike a turtle's getItemDetail. */
export type DetailedItemStack = ItemStack & Required<Pick<ItemStack, "displayName" | "maxCount" | "tags">>;

export interface StoredStack {
  slot: number;
  stack: DetailedItemStack;
}

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

  list(): LuaPairsIterable<number, ItemStack> {
    return this.cache.remember(`${this.prefix}:${this.name}:list`, () => this.target.list());
  }

  getItemDetail(slot: number): DetailedItemStack | undefined {
    return this.cache.remember(
      `${this.prefix}:${this.name}:slot:${slot}:detail`,
      () => this.target.getItemDetail(slot) as DetailedItemStack | undefined,
    );
  }

  /**
   * Every stack in the container, cached as one record so a transfer only costs the container it
   * touched. The count comes from the container's own listing, which is a single call; the rest is
   * held per item type, because a display name, stack size and tag set cannot change.
   */
  stacks(): StoredStack[] {
    return this.cache.remember(this._stacksKey(), () => {
      this._readTypes();

      const stacks: StoredStack[] = [];

      for (const [slot, entry] of this.list()) {
        const type = this._type(entry);

        if (type !== undefined) {
          stacks.push({ slot, stack: { ...type, count: entry.count } });
        }
      }

      return stacks;
    });
  }

  hasStacks(): boolean {
    return this.cache.has(this._stacksKey());
  }

  /** Reads the metadata of every item type in here that has not been seen before, all at once. */
  _readTypes(): void {
    const fns: (() => void)[] = [];
    const pending = new LuaSet<string>();

    for (const [slot, entry] of this.list()) {
      const key = this._typeKey(entry);

      if (!this.cache.has(key) && !pending.has(key)) {
        pending.add(key);
        fns.push(() => {
          const stack = this.target.getItemDetail(slot) as DetailedItemStack | undefined;

          if (stack !== undefined) {
            this.cache.set(key, stack);
          }
        });
      }
    }

    if (fns.length > 0) {
      new ThreadPool(20, fns).join();
    }
  }

  /** The count on this belongs to whichever slot it was first read from; take that from the listing. */
  _type(entry: ItemStack): DetailedItemStack | undefined {
    return this.cache.get(this._typeKey(entry));
  }

  _typeKey(entry: ItemStack): string {
    return `item:${entry.name}:${entry.nbt ?? ""}`;
  }

  _stacksKey(storageName: string = this.name): string {
    return `${this.prefix}:${storageName}:stacks`;
  }

  getItemLimit(slot: number): number {
    return this.cache.remember(`${this.prefix}:${this.name}:slot:${slot}:limit`, () => this.target.getItemLimit(slot));
  }

  // Both transfers drop their caches afterwards: a transfer yields, so anything read while it was in
  // flight would otherwise be cached as the state it left behind, and a move that found no room at
  // all has nothing to invalidate

  pushItems(toName: string, fromSlot: number, limit?: number | undefined, toSlot?: number | undefined): number {
    const moved = this.target.pushItems(toName, fromSlot, limit, toSlot);

    if (moved > 0) {
      this.flushSlot(toSlot, toName);
      this.flushSlot(fromSlot);
    }

    return moved;
  }

  pullItems(fromName: string, fromSlot: number, limit?: number | undefined, toSlot?: number | undefined): number {
    const moved = this.target.pullItems(fromName, fromSlot, limit, toSlot);

    if (moved > 0) {
      this.flushSlot(fromSlot, fromName);
      this.flushSlot(toSlot);
    }

    return moved;
  }

  flushSlot(slot: number | undefined, storageName: string = this.name) {
    if (slot !== undefined) {
      this.cache.delete(`${this.prefix}:${storageName}:slot:${slot}:*`);
    } else {
      this.cache.delete(`${this.prefix}:${storageName}:slot:*`);
    }

    this.cache.delete(`${this.prefix}:${storageName}:list`);
    this.cache.delete(this._stacksKey(storageName));
    this.cache.delete("acc:*");
  }

  flush(storageName: string = this.name) {
    this.cache.delete(`${this.prefix}:${storageName}:*`);
    this.cache.delete("acc:*");
  }
}
