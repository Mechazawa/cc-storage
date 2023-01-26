import Logger from "./Logger";
import Serializable from "./Serializable";

export default class Cache extends Serializable {
  cache = new LuaMap<string, any>();

  set(name: string, value: any) {
    this.cache.set(name, value);
  }

  flush(): void {
    this.cache = new LuaMap<string, any>();
  }

  delete(name: string): number {
    if (name.endsWith("*")) {
      name = name.slice(0, name.length - 1);

      const keys = Object.keys(this.cache).filter((key) => key.startsWith(name));

      return keys.map((key) => this.cache.delete(key)).filter((x) => x).length;
    }

    return this.cache.delete(name) ? 1 : 0;
  }

  get(name: string): any | undefined {
    return this.cache.get(name);
  }

  has(name: string): boolean {
    return true === this.cache.has(name);
  }

  remember(name: string, fn: () => any): any {
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

  serialise(): LuaMap<string, any> {
    return this.cache;
  }

  static deserialize(input: LuaMap<string, any>): Cache {
    const instance = new this();

    instance.cache = input;

    return instance;
  }
}
