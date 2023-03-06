import Logger from "../util/Logger";
import StorageManager, { StorageLocation } from "../StorageManager";

export class ReservedLocation implements StorageLocation {
  parent: ItemAllocator;

  peripheral: string;
  slot: number;
  count: number;
  name?: string | undefined;

  released = false;

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
            const reservation = this._reserve(location, rCount);

            if (reservation !== undefined) {
              output.push(reservation);

              count -= rCount;

              if (count <= 0) {
                return output;
              }
            }
          }
        }
      }
    }

    if (allowPartial) {
      return output;
    }

    output.forEach((x) => x.release());

    return [];
  }

  getAvailable(location: StorageLocation): number {
    const key = this._getReservationKey(location);
    const reserved = this.reservations.get(key) ?? 0;

    return Math.max(0, location.count - reserved);
  }

  _reserve(location: StorageLocation, count: number): ReservedLocation | void {
    const key = this._getReservationKey(location);
    const reserved = this.reservations.get(key) ?? 0;
    const available = location.count - reserved;

    if (available < count) {
      return;
    }

    this.reservations.set(key, reserved + count);

    return new ReservedLocation(this, location, count);
  }

  release(...locations: ReservedLocation[]) {
    for (const location of locations) {
      if (!location.released) {
        const key = this._getReservationKey(location);
        let reserved = this.reservations.get(key) ?? 0;

        reserved = Math.max(0, reserved - location.count);

        if (reserved > 0) {
          this.reservations.set(key, reserved);
        } else {
          this.reservations.delete(key);
        }

        location.released = true;
      }
    }
  }

  _getReservationKey(location: StorageLocation): string {
    return `${location.peripheral}-${location.slot}`;
  }
}
