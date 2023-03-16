import { CrafterConfig, ProviderConfig } from "../Config";
import RPC from "../RPC";
import App from "./App";

export default class Provider extends App {
  declare config: ProviderConfig;

  constructor(config: ProviderConfig) {
    super(config);
  }

  run(): void {
    this.runRPC();
  }

  runRPC() {
    RPC.openModems();
    RPC.host(this.config.hostname, {
      ping: (request, callback) => "pong",
      reboot: (request, callback) => {
        throw "unimplemented";
      },
      take: (request, callback, storageName: string, key: string, count: number, slot?: number) => {
        throw "unimplemented";
      },
      list: (request, callback) => {
        throw "unimplemented";
      },
      count: (request, callback, key?: string) => {
        throw "unimplemented";
      },
      flushCache: (request, callback) => {
        throw "unimplemented";
      },
    });
  }

  serialise(): LuaMap<string, any> {
    return {
      config: this.config,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Provider {
    return new this(input.get("config"));
  }
}
