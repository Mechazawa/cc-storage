import Cache from "./Cache";
import Logger from "./Logger";
import Recipe from "./crafting/Recipe";
import RecipeManager from "./crafting/RecipeManager";

export interface StorageLocation {
  peripheral: string;
  slot: number;
  count: number;
  name?: string;
}

interface Resource {
  key: string;
  name: string;
  displayName: string;
  tags: LuaMap<string, boolean>;
  nbt?: string;
  count: number;
}

export default class StorageManager {
  storagePool: LuaMap<string, Inventory> = new LuaMap<string, Inventory>();
  logger: Logger;
  recipeManager: RecipeManager;
  cache: Cache;

  constructor(recipeManager: RecipeManager, logger?: Logger, cache?: Cache) {
    this.logger = logger ?? new Logger();
    this.cache = cache ?? new Cache();
    this.recipeManager = recipeManager;

    this.count = this.cache.memoize('count', this.count.bind(this));
    this.size = this.cache.memoize('size', this.size.bind(this));
    this.used = this.cache.memoize('used', this.used.bind(this));
    this.getFragmented = this.cache.memoize('getFragmented', this.getFragmented.bind(this));
    this.getEmpty = this.cache.memoize('getEmpty', this.getEmpty.bind(this));
    this.findItemByKey = this.cache.memoize('findItemByKey', this.findItemByKey.bind(this));
    this.list = this.cache.memoize('list', this.list.bind(this));
  }

  addAllChests() {
    for (const name of peripheral.getNames()) {
      if (name.startsWith("minecraft:chest_")) {
        this.logger?.log(`Found ${name}`);

        this.addStorage(name);
      }
    }

    this.cache.flush();
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
    this.cache.flush();

    return true;
  }

  removeStorage(storageName: string): boolean {
    this.cache.flush();

    return this.storagePool.delete(storageName);
  }

  getStorage(storageName: string): Inventory | undefined {
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

    this.cache.flush();

    return freed;
  }

  findItemByKey(key: string, count: number): StorageLocation[] {
    const output = [];
    let found = 0;

    for (const [storageName, storage] of this.storagePool) {
      for (const [slot, _] of storage.list()) {
        const stack = storage.getItemDetail(slot);

        if (stack && this.testKey(key, stack)) {
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

  testKey(key: string, stack: ItemStack | Resource): boolean {
    if (key.startsWith("tag:")) {
      key = key.substring(4);
      return stack.tags.get(key) === true;
    } else if (key.startsWith("item:")) {
      return stack.name === key.substring(5);
    } else if (key.startsWith("nbt:")) {
      return stack.nbt === key.substring(4);
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

    this.cache.flush();
  }

  store(storageName: string, slot: number, count?: number): boolean {
    let remaining =
      count ?? peripheral.call(storageName, "getItemDetail")?.count ?? 0;

    if (remaining === 0) {
      return true;
    }

    this.cache.flush();

    for (const [_, storage] of this.storagePool) {
      remaining -= storage.pullItems(storageName, slot, remaining);

      if (remaining <= 0) return true;
    }

    return false;
  }

  withdrawl(
    storageName: string,
    key: string,
    count: number,
    slot?: number
  ): number {
    let sent = 0;
    const sources = this.findItemByKey(key, count);

    for (const source of sources) {
      sent +=
        this.getStorage(source.peripheral)?.pushItems(
          storageName,
          source.slot,
          source.count,
          slot
        ) ?? 0;
    }

    this.cache.flush();

    return sent;
  }

  list(): Resource[] {
    const resources = new LuaMap<string, Resource>();

    for (const [_, storage] of this.storagePool) {
      for (const [slot, __] of storage.list()) {
        const stack = storage.getItemDetail(slot);

        if(stack) {
          const key = stack.nbt !== undefined ? `nbt:${stack.nbt}` : `name:${stack.name}`;

          if (resources.has(key)) {
            const resource = resources.get(key) as Resource;

            resource.count += stack.count;

            resources.set(key, resource);
          } else {
            resources.set(key, {
              key: key,
              name: stack.name,
              displayName: stack.displayName,
              tags: stack.tags,
              nbt: stack.nbt,
              count: stack.count,
            });
          }
        }
      }
    }

    const output = [];

    for (const [_, resource] of resources) {
      output.push(resource);
    }

    return output;
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
      for (const [_, __] of storage.list()) {
        total++;
      }
    }

    return total;
  }

  count(key?: string): number {
    if (key === undefined) {
      return this.list().reduce((acc: number, v: Resource) => acc + v.count, 0);
    }

    // We gotta iterate through everything anyways so why not do it this way?
    return this.list().find(resource => this.testKey(key, resource))?.count ?? 0;
  }

  craft(recipe: Recipe, count: number): number {
    throw "unimplemented";
  }
}
