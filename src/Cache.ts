import Logger from "./Logger";
import Serializable from "./Serializable";

export default class Cache<T = any> extends Serializable {
  store = new LuaMap<string, T>();

  set(name: string, value: T) {
    this.store.set(name, value);
  }

  flush(): void {
    this.store = new LuaMap<string, T>();
  }

  delete(name: string): number {
    if (name.endsWith("*")) {
      name = name.slice(0, name.length - 1);

      const keys = Object.keys(this.store).filter((key) => key.startsWith(name));

      return keys.map((key) => this.store.delete(key)).filter((x) => x).length;
    }

    return this.store.delete(name) ? 1 : 0;
  }

  get(name: string): T | undefined {
    return this.store.get(name);
  }

  has(name: string): boolean {
    return true === this.store.has(name);
  }

  remember(name: string, fn: () => T): T {
    let value = this.get(name);

    if (value) {
      return value;
    }

    value = fn();

    this.set(name, value);

    return value;
  }

  memoize<T extends Function>(name: string, fn: T): T {
    return ((...args: any[]): any => {
      const key = `${name}|${args.map((x: any) => x ?? "nil").join("|")}`;

      return this.remember(key, () => fn(...args));
    }) as unknown as T;
  }

  serialise(): LuaMap<string, T> {
    return this.store;
  }

  static deserialize(input: LuaMap<string, any>): Cache {
    const instance = new this();

    instance.store = input;

    return instance;
  }
}
