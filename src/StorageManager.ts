import Cache from "./Cache";
import Logger from "./Logger";
import Recipe, { RecipeType } from "./crafting/Recipe";
import RecipeManager from "./crafting/RecipeManager";
import RPC from "./RPC";
import CachedInventoryProxy from "./CachedInventoryProxy";

export interface StorageLocation {
  peripheral: string;
  slot: number;
  count: number;
  name?: string;
}

export interface Resource {
  key: string;
  name: string;
  displayName: string;
  tags: LuaMap<string, boolean>;
  nbt?: string;
  count: number;
}

export interface Crafter {
  storageName: string;
  host: number;
  type: RecipeType;
}

export default class StorageManager {
  storagePool: LuaMap<string, CachedInventoryProxy> = new LuaMap<string, CachedInventoryProxy>();
  logger: Logger;
  recipeManager: RecipeManager;
  cache: Cache;
  crafters: Crafter[];

  constructor(recipeManager: RecipeManager, logger?: Logger) {
    this.logger = logger ?? new Logger();
    this.cache = new Cache();
    this.recipeManager = recipeManager;
    this.crafters = [];

    // todo: use some sort of decorator
    this.count = this.cache.memoize("acc:count", this.count.bind(this));
    this.size = this.cache.memoize("acc:size", this.size.bind(this));
    this.used = this.cache.memoize("acc:used", this.used.bind(this));
    this.getFragmented = this.cache.memoize("acc:getFragmented", this.getFragmented.bind(this));
    this.getEmpty = this.cache.memoize("acc:getEmpty", this.getEmpty.bind(this));
    this.findItemByKey = this.cache.memoize("acc:findItemByKey", this.findItemByKey.bind(this));
    this.list = this.cache.memoize("acc:list", this.list.bind(this));
  }

  registerCrafter(storageName: string, host: number, type: RecipeType): boolean {
    const exists =
      this.crafters.findIndex((c) => c.host === host && c.storageName === storageName && c.type === type) !== -1;

    if (exists) {
      return false;
    }

    this.crafters.push({ storageName, host, type });

    return true;
  }

  addStorage(storageName: string): boolean {
    if (this.storagePool.get(storageName) !== undefined) {
      return false;
    }

    const storage = peripheral.wrap(storageName) as Inventory;

    if (!storage) {
      return false;
    }

    this.storagePool.set(storageName, new CachedInventoryProxy(storage, this.cache, storageName));
    this.cache.flush();

    return true;
  }

  removeStorage(storageName: string): boolean {
    this.cache.flush();

    return this.storagePool.delete(storageName);
  }

  getStorage(storageName: string): CachedInventoryProxy | undefined {
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

      if (!target) break;

      const targetStorage = this.getStorage(target.peripheral);
      const targetStack = targetStorage?.getItemDetail(target.slot);

      for (let i = 0; i < fragmented.length && target.count < (targetStack?.maxCount ?? 0); i++) {
        if (fragmented[i].name === targetStack?.name) {
          const count =
            targetStorage?.pullItems(fragmented[i].peripheral, fragmented[i].slot, undefined, target.slot) ?? 0;

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
    if (key === undefined) return false;

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

  storeAll(storageName: string): number {
    this.logger.debug(storageName);
    const storage = peripheral.wrap(storageName) as Inventory;

    if (!storage) {
      return 0;
    }

    let total = 0;

    for (const [slot, { count }] of storage.list()) {
      total += this.store(storageName, slot, count);
    }

    return total;
  }

  store(storageName: string, slot: number, _count?: number): number {
    const count = _count ?? peripheral.call(storageName, "getItemDetail")?.count ?? 0;

    if (count === 0) {
      return 0;
    }

    this.cache.delete("acc:*");

    let total = 0;

    for (const [_, storage] of this.storagePool) {
      total += storage.pullItems(storageName, slot, count - total);

      if (count - total <= 0) return total;
    }

    return total;
  }

  withdrawl(storageName: string, key: string, count: number, slot?: number): number {
    let sent = 0;
    const sources = this.findItemByKey(key, count);

    for (const source of sources) {
      sent += this.getStorage(source.peripheral)?.pushItems(storageName, source.slot, source.count, slot) ?? 0;
    }

    this.cache.delete("acc:*");

    return sent;
  }

  list(): Resource[] {
    const resources = new LuaMap<string, Resource>();

    for (const [_, storage] of this.storagePool) {
      for (const [slot, __] of storage.list()) {
        const stack = storage.getItemDetail(slot);

        if (stack) {
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
    return this.list().find((resource) => this.testKey(key, resource))?.count ?? 0;
  }

  craft(recipe: Recipe, count: number): number {
    const crafter = this.crafters.find((x) => x.type === recipe.type);

    if (!crafter) {
      this.logger.error(`Missing crafter for "${recipe.name}"`);
      return 0;
    }

    const inputItems = recipe.getInput();

    for (const item of inputItems) {
      count = Math.min(this.count(item), count);

      if (count === 0) {
        this.logger.error(`Not enough resources to craft "${recipe.name}"`);
        return 0;
      }
    }

    const itemLocations = inputItems.map((key) => this.findItemByKey(key, count)).flat();

    for (const location of itemLocations) {
      this.getStorage(location.peripheral)?.pushItems(crafter.storageName, location.slot, location.count);
    }

    RPC.call(crafter.host, "craft", { recipeName: recipe.name, inputItems });

    this.storeAll(crafter.storageName);

    this.cache.delete("acc:*");

    return count;
  }
}
