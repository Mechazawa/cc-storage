import { AppConfig } from "./Config";

export default class ConfigFile {
  fileName: string;

  readonly deserializer = textutils.unserializeJSON;
  readonly serializer = textutils.serializeJSON;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  load(): AppConfig | undefined {
    const handler = fs.open(this.fileName, "r") as ReadHandle;

    if (handler === undefined) {
      return;
    }

    const rawConfig = handler.readAll() ?? "{}";

    handler.close();

    return this.deserializer(rawConfig) as AppConfig;
  }

  save(config: AppConfig): void {
    const handler = fs.open(this.fileName, "w") as WriteHandle;

    if (handler === undefined) {
      throw new Error("Unable to obtain config file lock");
    }

    handler.write(this.serializer(config));
    handler.close();
  }
}
