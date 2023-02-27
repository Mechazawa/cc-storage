import Cache from "./Cache";
import CachedInventoryProxy from "./CachedInventoryProxy";
import Logger from "./Logger";
import RPC from "./RPC";
import ThreadPool from "./ThreadPool";
import Recipe, { RecipeType, TransferableRecipe } from "./crafting/Recipe";
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
  locations: StorageLocation[];
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
    this.listCraftable = this.cache.memoize("acc:listCraftable", this.listCraftable.bind(this));
  }

  findCrafter(type: RecipeType, lockTimeout = 0, tries = 5): CrafterHost | undefined {
    for (let i = 0; i < tries; i++) {
      try {
        const crafter = RPC.broadcastCall("lookupCrafter", [type], 4);

        if (crafter !== undefined) {
          const lock = RPC.call(crafter.host, "lock", [lockTimeout], 4);

          this.logger.debug(`req lock ${crafter.host} ${lock}`);

          if (lock) {
            return crafter;
          }
        }
      } catch (e) {
        if (!`${e}`.includes("RPC Timeout Exceeded")) {
          this.logger.warn("Got error while looking for crafter: " + e);
        }
      }

      // use parallel so the queue doesn't get messed up
      parallel.waitForAll(() => sleep(1));
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

    const proxy = new CachedInventoryProxy(storage, this.cache, storageName);

    this.storagePool.set(storageName, proxy);
    this.cache.delete("acc:*");
    proxy.flush();

    return true;
  }

  removeStorage(storageName: string): boolean {
    this.cache.delete("acc:*");

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

  findItemByKey(key: string, count: number, allowMissing = false): StorageLocation[] {
    const output: StorageLocation[] = [];
    const items = this.list(key);

    for (const item of items) {
      for (const location of item.locations) {
        if (location.count >= count) {
          const outputLoc = { ...location };

          outputLoc.count = count;
          count = 0;

          output.push(outputLoc);

          return output;
        } else {
          output.push(location);

          count -= location.count;
        }
      }
    }

    return allowMissing ? output : [];
  }

  testKey(key: string, stack: ItemStack | Resource): boolean {
    if (key === undefined) return false;
    if (key.includes("|")) {
      return key.split("|").some((x) => this.testKey(x, stack));
    }

    if (key.startsWith("tag:")) {
      key = key.substring(4);

      if (key.startsWith("items:")) {
        key = key.substring(6);

        return stack.tags.get(key) === true || stack.name == key;
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

    const fns = [];
    const results: number[] = [];
    const genFn = (index: number, slot: number, count: number) => () => {
      results[index] = this.store(storageName, slot, count);
    };

    let index = 0;
    for (const [slot, item] of storage.list()) {
      fns.push(genFn(index, slot, item.count));
      index++;
    }

    parallel.waitForAll(...fns);

    return results.reduce((a, b) => a + b, 0);
  }

  store(storageName: string, slot: number, _count?: number): number {
    const count = _count ?? peripheral.call(storageName, "getItemDetail")?.count ?? 0;

    if (count === 0) {
      return 0;
    }

    let total = 0;

    for (const [_, storage] of this.storagePool) {
      total += storage.pullItems(storageName, slot, count - total);

      if (count - total <= 0) return total;
    }

    return total;
  }

  // todo: not updating cache properly when taking all (verify?)
  take(storageName: string, key: string, count: number, slot?: number): number {
    let sent = 0;
    const sources = this.findItemByKey(key, count);

    for (const source of sources) {
      this.logger.debug(source);
      sent += this.getStorage(source.peripheral)?.pushItems(storageName, source.slot, source.count, slot) ?? 0;
    }

    return sent;
  }

  list(key?: string): Resource[] {
    if (key !== undefined) {
      return this.list().filter((r) => this.testKey(key, r));
    }

    const resources = new LuaMap<string, Resource>();
    const storageFns = [];
    const stacks: ((ItemStack & { locations: StorageLocation[] }) | string)[] = [];
    const stackFns: (() => void)[] = [];

    for (const [storageName, _] of this.storagePool) {
      storageFns.push(() => {
        const storage = this.getStorage(storageName);

        if (storage === undefined) {
          throw new Error(`Invalid storage for list ${storageName}`);
        }

        for (const [slot, __] of storage.list() ?? []) {
          stackFns[stackFns.length] = ((i) => () => {
            const stack = this.getStorage(storageName)?.getItemDetail(slot);

            if (stack === undefined) {
              stacks[i] = "empty";
            } else {
              stacks[i] = {
                ...stack,
                locations: [
                  {
                    peripheral: storageName,
                    slot,
                    count: stack.count,
                  },
                ],
              };
            }
          })(stackFns.length);
        }
      });
    }

    new ThreadPool(20, storageFns).run();
    new ThreadPool(80, stackFns).run();

    for (const stack of stacks) {
      if (typeof stack === "object") {
        const key = stack.nbt !== undefined ? `nbt:${stack.nbt}` : `name:${stack.name}`;

        if (resources.has(key)) {
          const resource = resources.get(key) as Resource;

          resource.count += stack.count;

          for (const location of stack.locations) {
            resource.locations.push(location);
          }

          resources.set(key, resource);
        } else {
          resources.set(key, {
            key: key,
            name: stack.name,
            displayName: stack.displayName,
            tags: stack.tags,
            nbt: stack.nbt,
            count: stack.count,
            locations: [...stack.locations],
          });
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
    const genFn = (storageName: string) => () => (total += this.getStorage(storageName)?.size() ?? 0);

    for (const [storageName, _] of this.storagePool) {
      fns.push(genFn(storageName));
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
    return this.list(key).reduce((acc: number, v: Resource) => acc + v.count, 0);
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

  craft(_recipe: Recipe | string, times = 1, timeout = 120): number {
    const recipe = this._resolveRecipe(_recipe);
    const maxChunkSize = Math.floor(64 / recipe.getOutput().length);

    const outputs: number[] = [];
    const chunks: [number[], number][] = [[outputs, times % maxChunkSize]];

    for (let i = 1; i < times / maxChunkSize; i++) {
      chunks.push([outputs, maxChunkSize]);
      outputs.push(0);
    }

    assert(chunks.reduce((a, c) => a + c[1], 0) > 0);

    const fns = chunks.map(([out, count], i) => () => {
      const crafter = this.findCrafter(recipe.type, 30, timeout);

      if (crafter === undefined) {
        throw new Error(`Missing crafter for "${recipe.type}"`);
      }

      out[i] = this._craft(crafter, recipe, count, timeout);
      this.logger.log(`done ${out.reduce((a, c) => a + (c ?? 0), 0)} ${i + 1}/${chunks.length}`);
    });

    const pool = new ThreadPool(4, fns);

    pool.logger.showDebug = true;
    pool.run();

    return outputs.reduce((a, c) => a + (c ?? 0), 0);
  }

  _craft(crafter: CrafterHost, recipe: Recipe, times: number = 1, timeout: number = 120): number {
    this.logger.debug(`lock: ${crafter.host}`);

    const inputItems = recipe.getInput();

    for (const item of inputItems) {
      const counts = item.split("|").map((x) => this.count(x));
      times = Math.min(Math.max(...counts), times);

      if (times === 0) {
        this.logger.error(`Not enough "${item}"(${counts.join('|')}) to craft "${recipe.name}"`);
        return 0;
      }
    }

    let slot = 1;

    for (const key of inputItems) {
      // todo: split craft call based on item availability ex: `items:a|items:b`
      for (const location of this.findItemByKey(key, times)) {
        this.getStorage(location.peripheral)?.pushItems(crafter.storageName, location.slot, location.count, slot);
        slot++;
      }
    }

    this.logger.debug(`craft: ${crafter.host}`);
    try {
      const success = RPC.call(crafter.host, "craft", [recipe.name, inputItems, times], 30);
      
      return success ? times : 0;
    } finally {
      this.storeAll(crafter.storageName);

      this.logger.debug(`unlock: ${crafter.host}`);
      RPC.call(crafter.host, "unlock", [recipe.name, inputItems, times], 30);
    }
  }

  listCraftable(): TransferableRecipe[] {
    const resources = new LuaMap<string, number>();

    const record = (key: string, count: number) => resources.set(key, (resources.get(key) ?? 0) + count);

    for (const resource of this.list()) {
      record(`item:${resource.name}`, resource.count);
      record(`tag:items:${resource.name}s`, resource.count); // <- this is dumb

      for (const [tag, _] of resource.tags) {
        record(`tag:${tag}`, resource.count);
      }
    }

    const output: TransferableRecipe[] = [];

    for (const [_, recipe] of this.recipeManager.recipes) {
      const input = new LuaMap<string, number>();

      for (const item of recipe.getInput()) {
        input.set(item, (input.get(item) ?? 0) + 1);
      }

      let count = Infinity;

      for (const [item, needed] of input) {
        const found = item
          .split("|")
          .map((key) => resources.get(key) ?? 0)
          .reduce((a, c) => a + c, 0);

        count = Math.min(count, found / needed);
        count = Math.floor(count);

        if (count === 0) break;
      }

      if (count > 0) {
        output.push({
          name: recipe.name,
          input: recipe.getInput(),
          output: recipe.getOutput(),
          count,
        } as TransferableRecipe);
      }
    }

    return output;
  }
}
