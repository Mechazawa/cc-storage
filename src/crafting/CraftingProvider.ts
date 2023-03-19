import Cache from "../Cache";
import Logger from "../util/Logger";
import RecipeManager from "./RecipeManager";
import RPC from "../RPC";
import ThreadPool from "../util/threading/ThreadPool";
import Recipe, { TransferableRecipe } from "../crafting/Recipe";
import { ReservedLocation } from "../storage/ItemAllocator";
import StorageManager, { CrafterHost, StorageLocation } from "../StorageManager";

export default class CraftingProvider {
  recipeManager: RecipeManager;
  logger: Logger;
  cache: Cache;
  storage: StorageManager;

  constructor(storage: StorageManager, recipeManager: RecipeManager, cache?: Cache, logger?: Logger) {
    this.logger = logger ?? new Logger();
    this.cache = cache ?? new Cache();
    this.recipeManager = recipeManager;
    this.storage = storage;

    const cachePrefix = "acc:crafting:";

    this.list = this.cache.memoize(cachePrefix + "list", this.list.bind(this));
  }

  list(): TransferableRecipe[] {
    const resources = new LuaMap<string, number>();

    const record = (key: string, count: number) => resources.set(key, (resources.get(key) ?? 0) + count);

    for (const resource of this.storage.list()) {
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

  craft(_recipe: Recipe | string, times = 1, timeout = 120, threads = 4): number {
    const recipe = this._resolveRecipe(_recipe);
    const maxChunkSize = Math.floor(64 / recipe.getOutput().length);

    const outputs: number[] = [];
    const chunks: [number[], number, ReservedLocation[]][] = [[outputs, times % maxChunkSize, []]];

    for (let i = 1; i < times / maxChunkSize; i++) {
      chunks.push([outputs, maxChunkSize, []]);
      outputs.push(0);
    }

    assert(chunks.reduce((a, c) => a + c[1], 0) > 0);

    // todo: merge with loop below
    for (let i = 0; i < chunks.length; i++) {
      const locations: ReservedLocation[] = [];

      for (const key of recipe.getInput()) {
        const reserved = this.storage.allocator.reserve(key, chunks[i][1]);

        if (reserved.length === 0) {
          throw new Error(`Unable to find ${times}x "${key}" for crafting`);
        }

        for (const r of reserved) {
          locations.push(r);
        }
      }

      chunks[i][2] = locations;
    }

    const fns = chunks.map(([out, count, locations], i) => () => {
      const crafter = this.storage.findCrafter(recipe.type, 30, timeout);

      if (crafter === undefined) {
        throw new Error(`Missing crafter for "${recipe.type}"`);
      }

      out[i] = this._craft(crafter, recipe, locations, count, timeout);
      this.logger.log(`done ${out.reduce((a, c) => a + (c ?? 0), 0)} ${i + 1}/${chunks.length}`);

      locations.forEach((l) => l.release());
    });

    new ThreadPool(threads, fns).join();

    return outputs.reduce((a, c) => a + (c ?? 0), 0);
  }

  _craft(
    crafter: CrafterHost,
    recipe: Recipe,
    locations: StorageLocation[],
    times: number = 1,
    timeout: number = 120
  ): number {
    this.logger.debug(`lock: ${crafter.host}`);

    const inputItems = recipe.getInput();

    let slot = 1;

    // todo: split craft call based on item availability ex: `items:a|items:b`
    for (const location of locations) {
      this.storage.getStorage(location.peripheral)?.pushItems(crafter.storageName, location.slot, location.count, slot);
      slot++;
    }

    this.logger.debug(`craft: ${crafter.host}`);
    try {
      const success = RPC.call(crafter.host, "craft", [recipe.name, inputItems, times], 30);

      return success ? times : 0;
    } finally {
      this.storage.storeAll(crafter.storageName);

      this.logger.debug(`unlock: ${crafter.host}`);
      RPC.call(crafter.host, "unlock", [recipe.name, inputItems, times], 30);
    }
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
}
