type Constructor<T> = { new (): T };

export default class Serializable {
  serialise(): LuaMap<string, any> {
    return new LuaMap<string, any>();
  }

  static deserialise<T>(this: Constructor<T>, input: string): T {
    return new this();
  }
}
