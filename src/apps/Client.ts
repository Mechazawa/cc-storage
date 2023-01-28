import { ClientConfig } from "../Config";
import App from "./App";
import { ServerRPC } from "./Server.d";
import RPC from "../RPC";
import { CommandLine } from "./widgets/CommandLine";
import Logger from "../Logger";

export default class Client extends App {
  server?: ServerRPC;

  declare config: ClientConfig;

  constructor(config: ClientConfig) {
    super(config);
  }

  connect() {
    RPC.openModems();

    const uri = `${RPC.protocol}://${this.config.host}`;
    let hostId = rednet.lookup(RPC.protocol, this.config.host);

    if (hostId === undefined) {
      throw new Error(`Could not find ${uri}`);
    }

    if (typeof hostId !== "number") {
      hostId = hostId[0];
    }

    this.server = RPC.wrap(hostId) as ServerRPC | undefined;

    if (this.server === undefined) {
      throw new Error(`Could not connect to ${uri}`);
    }

    this.logger.log(`Connected to ${uri}`);
    this.runCommandLine();
  }

  run(): void {
    this.connect();
  }

  runCommandLine(): void {
    if (this.server === undefined) throw Error("Failed to start command line");

    const commandLine = new CommandLine(this.server, this.config.storage[0]);

    while (true) {
      term.setTextColor(colors.orange);
      write("] ");
      term.setTextColor(colors.white);

      const command = read(undefined, commandLine.history, (x) => commandLine.completeFn(x));
      const output = commandLine.exec(command);

      commandLine.cache.flush();

      this.logger.log(output);
    }
  }

  serialise(): LuaMap<string, any> {
    return {
      config: this.config,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Client {
    return new this(input.get("config"));
  }
}
