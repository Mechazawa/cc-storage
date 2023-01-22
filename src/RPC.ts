import Logger from "./Logger";

export type ID = string | number;

export interface RPCPacket {
  id?: ID;
}

export interface RPCRequest extends RPCPacket {
  client: number;
  method: string;
  args?: any[];
}

export interface RPCResult extends RPCPacket {
  result: any;
}

export interface RPCError extends RPCPacket {
  error: any;
}

export type RPCResponse = RPCResult | RPCError;

type RPCCallback = (request: RPCRequest, value: any, success?: boolean) => void;
type RPCMethod = (request: RPCRequest, callback: RPCCallback, ...args: any[]) => any;

export default class RPC {
  static readonly protocol: string = "rpc";

  static openModems(): void {
    for (const modem of peripheral.find("modem")) {
      rednet.open(peripheral.getName(modem));
    }
  }

  static host(
    hostname: string,
    methods: LuaMap<string, RPCMethod> | { [key: string]: RPCMethod },
    logger?: Logger,
    timeout?: number
  ): void {
    const log = (s: string) => (logger !== undefined ? logger.log(s) : print(s));

    log(`Starting server...`);

    rednet.host(this.protocol, hostname);

    log(`Host: ${this.protocol}://${hostname}`);
    log(`Methods: ${Object.keys(methods).join(", ")}`);

    while (true) {
      const [client, request] = rednet.receive(this.protocol, timeout);

      if (client === undefined) {
        throw new Error("RPC Timeout Exceeded!");
      }

      /**
       * async/await is janky at best in the lua
       * transpiler, that's why I'm using callbacks.
       */

      if (typeof request === "object") {
        const id: ID = request.get("id");

        try {
          const name = request.get("method") as string;
          let target = (...ignored: any) => Object.keys(methods);

          if (name !== "?" && typeof methods === "object") {
            target = (methods as { [key: string]: RPCMethod })[name];
          }

          log(`[${id}]> ${name}`);

          if (typeof target !== "function") {
            throw new Error("Unknown method");
          }

          request.set("client", client);

          const args = request.get("args") ?? [];
          const result: any = target(request, RPC.callback, ...args);

          if (result !== undefined) {
            RPC.callback(request as unknown as RPCRequest, result);
          }
        } catch (error) {
          RPC.callback(request as unknown as RPCRequest, error, false);
        }
      }
    }
  }

  static callback(request: RPCRequest, value: any, success: boolean = true) {
    if (request.id === 'undefined') {
      return;
    }

    // temp
    print(`[${request.id}]< ${value}`);

    const response: RPCResponse = success ? { id: request.id, result: [value] } : { id: request.id, error: value };

    rednet.send(request.client, response, this.protocol);
  };

  static call(client: number, method: string, args?: any[] | any, timeout?: number): any {
    const id = this._generate_id();
    const request = { id, method, args };

    rednet.send(client, request, this.protocol);

    return this._expect(client, id, timeout);
  }

  static _expect(client: number, id: ID, timeout?: number): any {
    while (true) {
      const [from, body] = rednet.receive(this.protocol, timeout);

      if (from === undefined) {
        throw new Error("RPC Timeout Exceeded!");
      }

      // I hate that there is no continue statement in lua
      if (from === client && typeof body === "object" && body.get("id") === id) {
        if (body.has("error")) {
          throw body.get("error");
        } else {
          return body.get("result");
        }
      }
    }
  }

  static notify(client: number, method: string, args: any[]): void {
    const request = { method, args };

    rednet.send(client, request, this.protocol);
  }

  static wrap(client: number, timeout?: number): WrappedRPC {
    const methods = this.call(client, "?", undefined, timeout);
    const output: WrappedRPC = {};

    for (const method of methods) {
      output[method] = (...args: any[]) => this.call(client, method, args, timeout);
    }

    return output;
  }

  static readonly ID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  static _generate_id(size: number = 6): ID {
    let output = "";

    while (output.length < size) {
      const index = Math.floor(Math.random() * this.ID_CHARS.length);

      output += this.ID_CHARS[index];
    }

    return output;
  }
}

export interface WrappedRPC {
  [key: string]: (...args: any[]) => any;
}
