import Logger from "../Logger";
import StorageManager, { StorageLocation } from "../StorageManager";

export class ReservedLocation implements StorageLocation {
  parent: ItemAllocator;

  peripheral: string;
  slot: number;
  count: number;
  name?: string | undefined;

  constructor(parent: ItemAllocator, location: StorageLocation, count: number) {
    this.parent = parent;

    this.peripheral = location.peripheral;
    this.slot = location.slot;
    this.count = count;
    this.name = location.name;
  }

  release() {
    this.parent.release(this);
  }
}

// todo rename
export default class ItemAllocator {
  storage: StorageManager;
  logger: Logger;
  reservations = new LuaMap<string, number>();

  constructor(storage: StorageManager, logger = storage.logger) {
    this.storage = storage;
    this.logger = logger;
  }

  reserve(key: string, count: number, allowPartial = false): ReservedLocation[] {
    const output: ReservedLocation[] = [];

    for (const resource of this.storage.list()) {
      if (this.storage.testKey(key, resource)) {
        for (const location of resource.locations) {
          const available = this.getAvailable(location);

          if (available > 0) {
            const rCount = Math.min(count, available);

            output.push(this._reserve(location, rCount));

            count -= rCount;

            if (count <= 0) {
              return output;
            }
          }
        }
      }
    }

    return allowPartial ? output : [];
  }

  getAvailable(location: StorageLocation): number {
    const key = this._getReservationKey(location);
    const reserved = this.reservations.get(key) ?? 0;

    return Math.max(0, location.count - reserved);
  }

  _reserve(location: StorageLocation, count: number): ReservedLocation {
    const key = this._getReservationKey(location);
    const reserved = this.reservations.get(key) ?? 0;

    if (location.count - reserved < count) {
      throw new Error(
        `Tried to reserve ${count} items but ${reserved}/${location.count} of ${location.slot}@${location.peripheral} used`
      );
    }

    this.reservations.set(key, reserved + count);

    return new ReservedLocation(this, location, count);
  }

  release(...locations: StorageLocation[]) {
    for (const location of locations) {
      const key = this._getReservationKey(location);
      let reserved = this.reservations.get(key) ?? 0;

      reserved = Math.max(0, reserved - location.count);

      if (reserved > 0) {
        this.reservations.set(key, reserved);
      } else {
        this.reservations.delete(key);
      }
    }
  }

  _getReservationKey(location: StorageLocation): string {
    return `${location.peripheral}-${location.slot}`;
  }
}
