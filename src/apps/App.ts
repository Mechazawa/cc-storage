import { AppConfig } from "../Config";
import Logger from "../Logger";
import RPC from "../RPC";
import Serializable from "../Serializable";

export default abstract class App extends Serializable {
  logger: Logger;
  config: AppConfig;

  constructor(config: AppConfig) {
    super();

    this.config = config;
    this.logger = new Logger(config.logTimestamp, config.logFile);
  }

  abstract run(): void;
  
  teardown(): void {
    rednet.unhost(RPC.protocol);
  }

  static generateConfig(): AppConfig {
    throw new Error("unimplemented generateConfig");
  }
}
