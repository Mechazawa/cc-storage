import Logger from "./Logger";

export interface StorageLocation {
  peripheral: string;
  slot: number;
  count: number;
  name?: string;
}

interface StoredResource {
    locations: StorageLocation[],
    name: string,
    tags: {}
}

export default class StorageManager {
  storagePool: LuaMap<string, Inventory> = new LuaMap<string, Inventory>;
  logger: Logger;

  constructor(logger?: Logger) {
    this.logger = logger ?? new Logger();
  }

  addAllChests() {
    for (const name of peripheral.getNames()) {
      if (name.startsWith("minecraft:chest_")) {
        this.logger?.log(`Found ${name}`);

        this.addStorage(name);
      }
    }
  }

  addStorage(storageName: string): boolean {
    if (this.storagePool.get(storageName) !== undefined) {
      return false;
    }

    const storage = peripheral.wrap(storageName) as Inventory;

    if (!storage) {
        return false;
    }

    this.storagePool.set(storageName, storage);

    return true;
  }

  removeStorage(storageName: string): boolean {
    return this.storagePool.delete(storageName);
  }

  getStorage(storageName: string): Inventory|undefined {
    return this.storagePool.get(storageName);
  }

  getFragmented(): StorageLocation[] {
    const output = [];

    for (const [storageName, storage] of this.storagePool) {
      for (const [slot, _] of storage.list()) {
        const stack = storage.getItemDetail(slot);

        if (stack && stack.count < stack.maxCount) {
          output.push({
            peripheral: storageName,
            slot: slot,
            count: stack.count,
            name: stack.name,
          });
        }
      }
    }

    return output;
  }

  getEmpty(): StorageLocation[] {
    const output = [];

    for (const [storageName, storage] of this.storagePool) {
      for (let slot = 1; slot <= storage.size(); slot++) {
        const stack = storage.getItemDetail(slot);

        if (!stack) {
          output.push({
            peripheral: storageName,
            slot: slot,
            count: 0,
          });
        }
      }
    }

    return output;
  }

  /**
   * Defragment storage
   * @returns Amount of slots freed
   */
  defragment(): number {
    const fragmented = this.getFragmented();
    let freed = 0;

    while (fragmented.length > 0) {
      const target = fragmented.shift();
      const targetStack = this.getStorage(
        target?.peripheral ?? ""
      )?.getItemDetail(target?.slot ?? 1);

      for (
        let i = 0;
        i < fragmented.length &&
        target &&
        targetStack &&
        target.count < targetStack.maxCount;
        i++
      ) {
        if (fragmented[i].name === targetStack.name) {
          const count =
            this.getStorage(target.peripheral)?.pullItems(
              fragmented[i].peripheral,
              fragmented[i].slot,
              undefined,
              target.slot
            ) ?? 0;

            target.count += count;
            fragmented[i].count -= count;
        }

        if (fragmented[i].count <= 0) {
          fragmented.splice(i, 1);
          i--;
          freed++;
        }
      }
    }

    return freed;
  }

  findItemByKey(key: string, count: number): StorageLocation[] {
    const output = [];
    let found = 0;

    for (const [storageName, storage] of this.storagePool) {
      for (const [slot, _] of storage.list()) {
        const stack = storage.getItemDetail(slot);

        if (stack && this.testStackKey(key, stack)) {
          const loc: StorageLocation = {
            peripheral: storageName,
            slot: slot,
            count: Math.max(0, Math.min(count - found, stack.count)),
          };

          found += loc.count;

          output.push(loc);

          if (found >= count) {
            return output;
          }
        }
      }
    }

    return [];
  }

  testStackKey(key: string, stack: ItemStack): boolean {
    if (key.startsWith("tag:")) {
      key = key.substring(4);
      return stack.tags.get(key) === true;
    } else if (key.startsWith("item:")) {
      key = key.substring(5);
      return stack.name === key;
    }

    return false;
  }

  storeAll(storageName: string) {
    const storage = this.getStorage(storageName);

    if (!storage) {
        return;
    }

    for (const [slot, { count }] of storage.list()) {
        this.store(storageName, slot, count);
    }
  }

  store(storageName: string, slot: number, count?: number): boolean {
    let remaining = count ?? peripheral.call(storageName, 'getItemDetail')?.count ?? 0;

    if (remaining === 0) {
        return true;
    }

    for (const [_, storage] of this.storagePool) {
        remaining -= storage.pullItems(storageName, slot, remaining);

        if (remaining <= 0) 
            return true;
    }

    return false;
  }

  withdrawl(storageName: string, key: string, count: number, slot?: number): number {
    let sent = 0;
    const sources = this.findItemByKey(key, count);

    for(const source of sources) {
        sent += this.getStorage(source.peripheral)?.pushItems(storageName, source.slot, source.count, slot) ?? 0;
    }

    return sent;
  }

  count(key?: string): number {
    return 0;
  }

  size(): number {
    let total = 0;

    for (const [_, storage] of this.storagePool) {
        total += storage.size();
    }

    return total;
  }

  free(): number {
    return this.size() - this.used();
  }

  used(): number {
    let total = 0;

    for (const [_, storage] of this.storagePool) {
        for (const [_,__] of storage.list()) {
            total++;
        }
    }

    return total;
  }
}
