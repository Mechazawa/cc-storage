export default class Serializable {
  serialize(): LuaMap<string, any> {
    return new LuaMap<string, any>();
  }

  static deserialize(input: LuaMap<string, any>): Serializable {
    return new this();
  }
}
