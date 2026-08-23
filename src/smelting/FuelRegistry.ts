import StorageManager from "../StorageManager";
import { ReservedLocation } from "../storage/ItemAllocator";

export interface FuelEntry {
  item: string;
  minKept: number;
  /** Lowest goes into a furnace first, so junk can be spent before anything worth keeping. */
  priority: number;
}

export default class FuelRegistry {
  storage: StorageManager;
  fileName: string;
  entries: FuelEntry[] = [];

  readonly deserializer = textutils.unserializeJSON;
  readonly serializer = textutils.serializeJSON;

  constructor(storage: StorageManager, fileName: string = "fuel.json") {
    this.storage = storage;
    this.fileName = fileName;

    this.load();
  }

  load(): void {
    const [file] = fs.open(this.fileName, "r");

    if (file === undefined) {
      return;
    }

    const raw = file.readAll() ?? "[]";

    file.close();

    const [entries] = this.deserializer(raw);

    this.entries = (entries ?? []) as FuelEntry[];
    this.entries.sort((a, b) => a.priority - b.priority);
  }

  save(): void {
    const [file, reason] = fs.open(this.fileName, "w");

    if (file === undefined) {
      throw new Error(`Unable to write fuel registry: ${reason}`);
    }

    file.write(this.serializer(this.entries));
    file.close();
  }

  find(item: string): FuelEntry | undefined {
    return this.entries.find((entry) => entry.item === item);
  }

  add(item: string, minKept: number = 0, priority?: number): FuelEntry {
    const existing = this.find(item);
    const entry = existing ?? { item, minKept, priority: priority ?? this._nextPriority() };

    if (existing === undefined) {
      this.entries.push(entry);
    } else {
      entry.minKept = minKept;
      entry.priority = priority ?? entry.priority;
    }

    this.entries.sort((a, b) => a.priority - b.priority);
    this.save();

    return entry;
  }

  /** Behind everything registered, leaving room to slot a fuel in between two later on. */
  _nextPriority(): number {
    return this.entries.reduce((highest, entry) => Math.max(highest, entry.priority), 0) + 10;
  }

  remove(item: string): boolean {
    const remaining = this.entries.filter((entry) => entry.item !== item);

    if (remaining.length === this.entries.length) {
      return false;
    }

    this.entries = remaining;
    this.save();

    return true;
  }

  /** Claims fuel from storage, lowest priority first, leaving each entry's floor behind. */
  reserve(count: number): ReservedLocation[] {
    for (const entry of this.entries) {
      const key = `item:${entry.item}`;
      const spare = Math.min(count, this.storage.count(key) - entry.minKept);

      if (spare > 0) {
        const reserved = this.storage.allocator.reserve(key, spare, true);

        if (reserved.length > 0) {
          return reserved;
        }
      }
    }

    return [];
  }
}
