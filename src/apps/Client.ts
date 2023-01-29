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

  connect(tries = 5) {
    RPC.openModems();

    const uri = `${RPC.protocol}://${this.config.host}`;
    let hostId: number;

    while (true) {
      tries -= 1;
      hostId = rednet.lookup(RPC.protocol, this.config.host) as number;

      if (hostId !== undefined) {
        break;
      }

      this.logger.warn("Failed to connect");

      if (hostId === undefined && tries === 0) {
        break;
      }

      this.logger.log("Retrying connection...");
      sleep(1);
    }

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

      try {
        const output = commandLine.exec(command);

        if (output !== undefined) {
          this.logger.log(output);
        }
      } catch (e) {
        this.logger.error(e as string);
      }

      commandLine.cache.flush();
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
