import FuelRegistry from "./FuelRegistry";
import Logger from "../util/Logger";
import StorageManager from "../StorageManager";
import { JobProgress } from "../Queue";
import { ReservedLocation } from "../storage/ItemAllocator";

const SLOT_INPUT = 1;
const SLOT_FUEL = 2;
const SLOT_OUTPUT = 3;

/**
 * CC:T resolves an inventory through the face the modem sits on, so on Forge a furnace exposes only
 * the slots that face reaches. Anything that does not show all three is unusable for smelting.
 */
const FURNACE_SLOTS = 3;

interface FurnaceBatch {
  name: string;
  count: number;
  slotLimit: number;
  sent: number;
  smelted: number;
  done: boolean;
  starved: boolean;
}

/** Any block that smelts: never storage, because its slots are input/fuel/output rather than free space. */
export function isSmelter(name: string): boolean {
  const [type] = peripheral.getType(name);

  return type !== undefined && (type.includes("furnace") || type.includes("smoker"));
}

export default class SmeltingProvider {
  storage: StorageManager;
  fuel: FuelRegistry;
  logger: Logger;
  furnaces: string[] = [];
  batches: FurnaceBatch[] = [];
  key = "";

  /** Seconds without a transfer before the furnaces are considered stuck. One item takes 10s to smelt. */
  stallTimeout = 30;
  pollInterval = 2;

  constructor(storage: StorageManager, logger?: Logger) {
    this.storage = storage;
    this.logger = logger ?? new Logger();
    this.fuel = new FuelRegistry(storage);
  }

  discover(): number {
    this.furnaces = peripheral
      .find("inventory", (name) => this._isPlainFurnace(name))
      .map((furnace) => peripheral.getName(furnace))
      // Storage pushes items by network name, so a furnace wrapped by side cannot be reached
      .filter((name) => name.includes(":"))
      .filter((name) => this._hasFurnaceSlots(name));

    return this.furnaces.length;
  }

  progress(): JobProgress {
    return {
      name: "smelt",
      target: this.key,
      done: this.batches.reduce((total, batch) => total + batch.smelted, 0),
      total: this.batches.reduce((total, batch) => total + batch.count, 0),
    };
  }

  /** Hands back what a crash or a player left behind, so every batch starts from an empty furnace. */
  reclaimAll(): number {
    return this.furnaces.reduce((stored, furnaceName) => stored + this._reclaim(furnaceName), 0);
  }

  /**
   * Smelts by handing every furnace an equal share and keeping each of them fed until it is done
   * @returns Amount of items handed back to storage
   */
  smelt(key: string, count: number): number {
    if (this.furnaces.length === 0) {
      throw new Error("No furnaces on the network");
    }

    const batches = this._split(count, this.furnaces.length).map((share, index) =>
      this._batch(this.furnaces[index], share),
    );

    this.key = key;
    this.batches = batches;

    this._assertFuel();

    this.logger.info(`Smelting ${count}x "${key}" over ${batches.length} furnaces`);

    let idle = 0;

    while (idle < this.stallTimeout && batches.some((batch) => !batch.done)) {
      let moved = 0;

      for (const batch of batches) {
        if (!batch.done) {
          moved += this._tick(batch, key);
        }
      }

      idle = moved > 0 ? 0 : idle + this.pollInterval;

      sleep(this.pollInterval);
    }

    batches.forEach((batch) => this._reclaim(batch.name));

    const total = batches.reduce((sum, batch) => sum + batch.count, 0);
    const smelted = batches.reduce((sum, batch) => sum + batch.smelted, 0);

    if (smelted < total && batches.some((batch) => batch.starved)) {
      throw new Error(`Ran out of fuel after ${smelted} of ${total}x "${key}"`);
    }

    if (smelted < total) {
      this.logger.warn(`Gave up with ${total - smelted}x "${key}" left unsmelted`);
    }

    return smelted;
  }

  /** Refuses a batch that cannot be lit at all, rather than loading furnaces and stalling on them. */
  _assertFuel(): void {
    const sources = this.fuel.reserve(1);

    this.storage.allocator.release(...sources);

    if (sources.length === 0) {
      throw new Error("No fuel available");
    }
  }

  /** A blast furnace or smoker takes only part of what a furnace does, so a batch aimed at one stalls. */
  _isPlainFurnace(name: string): boolean {
    const [type] = peripheral.getType(name);

    return type !== undefined && type.includes("furnace") && !type.includes("blast");
  }

  _hasFurnaceSlots(name: string): boolean {
    const slots = peripheral.call<number>(name, "size");

    if (slots !== FURNACE_SLOTS) {
      this.logger.warn(`Ignoring furnace ${name}: ${slots} slots reachable, expected ${FURNACE_SLOTS}`);

      return false;
    }

    return true;
  }

  /** Spreads a count over the furnaces so they all finish at the same time. */
  _split(count: number, buckets: number): number[] {
    const share = Math.floor(count / buckets);
    const remainder = count % buckets;
    const output: number[] = [];

    for (let i = 0; i < buckets; i++) {
      const bucket = share + (i < remainder ? 1 : 0);

      if (bucket > 0) {
        output.push(bucket);
      }
    }

    return output;
  }

  _batch(name: string, count: number): FurnaceBatch {
    return {
      name,
      count,
      slotLimit: peripheral.call<number>(name, "getItemLimit", SLOT_INPUT),
      sent: 0,
      smelted: 0,
      done: false,
      starved: false,
    };
  }

  /**
   * Moves one furnace along: output back to storage, more input in, fuel when the slot has run dry
   * @returns Amount of items transferred
   */
  _tick(batch: FurnaceBatch, key: string): number {
    const slots = this._readSlots(batch.name);
    const input = slots.get(SLOT_INPUT)?.count ?? 0;
    const output = slots.get(SLOT_OUTPUT)?.count ?? 0;
    const fuel = slots.get(SLOT_FUEL)?.count ?? 0;

    if (batch.sent >= batch.count && input === 0 && output === 0) {
      batch.done = true;

      return 0;
    }

    let moved = 0;

    if (output > 0) {
      const pulled = this.storage.store(batch.name, SLOT_OUTPUT, output);

      batch.smelted += pulled;
      moved += pulled;
    }

    // Both claims are made before either push, because a push drops the cached listing and the second
    // search would have to pay for rebuilding it
    const room = Math.min(batch.count - batch.sent, batch.slotLimit - input);
    const inputSources = room > 0 ? this.storage.allocator.reserve(key, room, true) : [];

    // Enough fuel to see the rest of the batch through even if every item costs its own. Whatever
    // does not burn comes back in the reclaim, so committing a stack of it costs nothing.
    const fuelSources =
      fuel === 0 && (input > 0 || batch.sent < batch.count)
        ? this.fuel.reserve(Math.min(batch.count - batch.smelted, batch.slotLimit))
        : undefined;

    if (fuelSources !== undefined) {
      batch.starved = fuelSources.length === 0;
    }

    const pushed = this._push(batch.name, SLOT_INPUT, inputSources);

    batch.sent += pushed;

    return moved + pushed + this._push(batch.name, SLOT_FUEL, fuelSources ?? []);
  }

  /** Empties one furnace into storage: leftover input, unburned fuel and any output. */
  _reclaim(furnaceName: string): number {
    let stored = 0;

    for (const [slot, stack] of this._readSlots(furnaceName)) {
      stored += this.storage.store(furnaceName, slot, stack.count);
    }

    return stored;
  }

  /** One call for all three slots, because each peripheral read is a round trip to the server. */
  _readSlots(furnaceName: string): LuaMap<number, ItemStack> {
    const slots = new LuaMap<number, ItemStack>();

    for (const [slot, stack] of peripheral.call<LuaPairsIterable<number, ItemStack>>(furnaceName, "list")) {
      slots.set(slot, stack);
    }

    return slots;
  }

  _push(furnaceName: string, slot: number, sources: ReservedLocation[]): number {
    let moved = 0;

    try {
      for (const source of sources) {
        moved +=
          this.storage.getStorage(source.peripheral)?.pushItems(furnaceName, source.slot, source.count, slot) ?? 0;
      }
    } finally {
      this.storage.allocator.release(...sources);
    }

    return moved;
  }
}
