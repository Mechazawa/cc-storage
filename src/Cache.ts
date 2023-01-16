export default class Cache {
  cache = new LuaMap<string, any>();

  set(name: string, value: any) {
    this.cache.set(name, value);
  }

  flush(): void {
    this.cache = new LuaMap<string, any>();
  }

  delete(name: string): boolean {
    return this.cache.delete(name);
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
}
