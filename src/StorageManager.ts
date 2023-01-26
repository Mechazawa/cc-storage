import Cache from "./Cache";
import CachedInventoryProxy from "./CachedInventoryProxy";
import Logger from "./Logger";
import RPC from "./RPC";
import Recipe, { RecipeType } from "./crafting/Recipe";
import RecipeManager from "./crafting/RecipeManager";

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

export interface CrafterHost {
  storageName: string;
  host: number;
  type: RecipeType;
}

// todo: cc yields when communicating with peripherals, so running in parralel makes the application go brrrrr...
export default class StorageManager {
  storagePool: LuaMap<string, CachedInventoryProxy> = new LuaMap<string, CachedInventoryProxy>();
  logger: Logger;
  recipeManager: RecipeManager;
  cache: Cache;

  constructor(recipeManager: RecipeManager, logger?: Logger) {
    this.logger = logger ?? new Logger();
    this.cache = new Cache();
    this.recipeManager = recipeManager;

    // todo: use some sort of decorator
    this.count = this.cache.memoize("acc:count", this.count.bind(this));
    this.size = this.cache.memoize("acc:size", this.size.bind(this));
    this.used = this.cache.memoize("acc:used", this.used.bind(this));
    this.getFragmented = this.cache.memoize("acc:getFragmented", this.getFragmented.bind(this));
    this.getEmpty = this.cache.memoize("acc:getEmpty", this.getEmpty.bind(this));
    this.findItemByKey = this.cache.memoize("acc:findItemByKey", this.findItemByKey.bind(this));
    this.list = this.cache.memoize("acc:list", this.list.bind(this));
  }

  findCrafter(type: RecipeType): CrafterHost {
    // Todo fix multi return unpacking
    return RPC.broadcastCall("lookupCrafter", [type], 5)[1];
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

    this.cache.delete("acc:*");

    return freed;
  }

  findItemByKey(key: string, count: number = Infinity): StorageLocation[] {
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

    if (count === Infinity) {
      return output;
    }

    return [];
  }

  testKey(key: string, stack: ItemStack | Resource): boolean {
    if (key === undefined) return false;

    if (key.startsWith("tag:")) {
      key = key.substring(4);

      if (key.startsWith("items:")) {
        key = key.substring(6);
      }

      return stack.tags.get(key) === true;
    } else if (key.startsWith("item:") || key.startsWith("name:")) {
      return stack.name === key.substring(5);
    } else if (key.startsWith("nbt:")) {
      return stack.nbt === key.substring(4);
    }

    return false;
  }

  storeAll(storageName: string): number {
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

  // todo: not updating cache properly when withdrawling all all
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
    const fns = [];

    for (const [_, storage] of this.storagePool) {
      fns.push(() => (total += storage.size()));
    }

    parallel.waitForAll(...fns);

    return total;
  }

  free(): number {
    return this.size() - this.used();
  }

  used(): number {
    let total = 0;
    const fns = [];

    for (const [_, storage] of this.storagePool) {
      fns.push(() => {
        for (const [_, __] of storage.list()) {
          total++;
        }
      });
    }

    parallel.waitForAll(...fns);

    return total;
  }

  count(key?: string): number {
    if (key === undefined) {
      return this.list().reduce((acc: number, v: Resource) => acc + v.count, 0);
    }

    // We gotta iterate through everything anyways so why not do it this way?
    return this.findItemByKey(key).reduce((acc: number, v: StorageLocation) => acc + v.count, 0);
  }

  _resolveRecipe(recipe: string | Recipe): Recipe {
    if (typeof recipe === "string") {
      if (!this.recipeManager.has(recipe)) {
        throw new Error("Could not find recipe: " + recipe);
      }

      return this.recipeManager.get(recipe) as Recipe;
    }

    return recipe;
  }

  getMaxCraftable(recipe: Recipe | string): number {
    recipe = this._resolveRecipe(recipe);

    // Group input items
    const input = new LuaMap<string, number>();

    for (const item of recipe.getInput()) {
      input.set(item, (input.get("item") ?? 0) + 1);
    }

    let count = Infinity;

    for (const [item, amount] of input) {
      const availible = this.count(item);

      count = Math.min(count, availible / amount);
    }

    return Math.floor(count);
  }

  craft(recipe: Recipe | string, count: number = 1): number {
    recipe = this._resolveRecipe(recipe);

    const recipeType = recipe.type; // gotta do this outside the lambda because the compiler hates it otherwise
    const crafter = this.findCrafter(recipe.type);
    const inputItems = recipe.getInput();

    for (const item of inputItems) {
      count = Math.min(this.count(item), count);

      if (count === 0) {
        this.logger.error(`Not enough resources to craft "${recipe.name}"`);
        return 0;
      }
    }

    // todo: make the crafter take the items out of storage, not the other way round
    const itemLocations = inputItems.map((key) => this.findItemByKey(key, count)).flat();
    let slot = 1;

    for (const location of itemLocations) {
      this.getStorage(location.peripheral)?.pushItems(crafter.storageName, location.slot, location.count, slot);
      slot++;
    }

    const success = RPC.call(crafter.host, "craft", [recipe.name, inputItems, count]);

    this.storeAll(crafter.storageName);

    // todo: this doesn't seem to clear the cache properly... WHY!?
    this.logger.debug("craft cache acc del");
    this.cache.delete("acc:*");

    return success ? count : 0;
  }
}
