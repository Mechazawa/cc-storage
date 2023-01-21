import { ServerConfig, ClientConfig, CrafterConfig } from "./Config";

export default class ConfigFile {
  fileName: string;

  readonly deserializer = textutils.unserializeJSON;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  load(): ServerConfig | CrafterConfig | ClientConfig {
    const handler = fs.open(this.fileName, "r") as ReadHandle;

    if (handler === undefined) {
      throw new Error("Missing config file!");
    }

    const rawConfig = handler.readAll() ?? "{}";

    handler.close();

    return this.deserializer(rawConfig) as ServerConfig | CrafterConfig | ClientConfig;
  }
}
