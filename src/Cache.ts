import Logger from "./util/Logger";
import Serializable from "./Serializable";
import AutoYield from "./util/threading/AutoYield";

const expireEpoch = Symbol("expireEpoch");

class TimedValue<T> {
  expires?: number;
  value: T;

  constructor(value: T, seconds?: number) {
    this.value = value;

    if (seconds !== undefined) {
      this.expires = os.epoch("utc") + seconds * 1000;
    }
  }
}

export default class Cache<T = any> extends Serializable {
  store = new LuaMap<string, TimedValue<T>>();

  size(): number {
    let count = 0;

    for (const [_, __] of this.store) {
      count++;
    }

    return count;
  }

  set(name: string, value: T, seconds?: number): T {
    this.store.set(name, new TimedValue(value, seconds));

    return value;
  }

  touch(name: string, seconds?: number): T | undefined {
    const value = this.get(name);

    if (value) {
      return this.set(name, value, seconds);
    }
  }

  flush(): void {
    this.store = new LuaMap<string, TimedValue<T>>();
  }

  delete(name: string): number {
    if (!name.endsWith("*")) {
      return this.store.delete(name) ? 1 : 0;
    }

    const prefix = name.slice(0, name.length - 1);
    // Collected first because a table cannot be deleted from while it is being walked
    const matches: string[] = [];

    for (const [key, _] of this.store) {
      if (key.startsWith(prefix)) {
        matches.push(key);
      }
    }

    let deleted = 0;

    for (const key of matches) {
      deleted += this.store.delete(key) ? 1 : 0;
    }

    return deleted;
  }

  get(name: string): T | undefined {
    const cached = this.store.get(name);

    if (cached === undefined) {
      return;
    }

    if (cached?.expires !== undefined && cached.expires <= os.epoch("utc")) {
      this.store.delete(name);
      return;
    }

    return cached.value;
  }

  has(name: string): boolean {
    return this.store.get(name) !== undefined;
  }

  remember<T2 extends T>(name: string, fn: () => T2, seconds?: number): T2 {
    let value = this.get(name) as T2;

    if (value) {
      return value;
    }

    value = fn();

    this.set(name, value, seconds);

    return value;
  }

  memoize<T2 extends Function>(name: string, fn: T2, seconds?: number): T2 {
    return ((...args: any[]): any => {
      const key = `${name}|${args.map((x: any) => x ?? "nil").join("|")}`;

      return this.remember(key, () => fn(...args), seconds);
    }) as unknown as T2;
  }

  serialize(): LuaMap<string, TimedValue<T>> {
    return this.store;
  }

  static deserialize(input: LuaMap<string, any>): Cache {
    const instance = new this();

    instance.store = input;

    return instance;
  }
}
