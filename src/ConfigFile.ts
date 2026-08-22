import { AppConfig } from "./Config";

export default class ConfigFile {
  fileName: string;

  readonly deserializer = textutils.unserializeJSON;
  readonly serializer = textutils.serializeJSON;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  load(): AppConfig | undefined {
    const [handler] = fs.open(this.fileName, "r");

    if (handler === undefined) {
      return;
    }

    const rawConfig = handler.readAll() ?? "{}";

    handler.close();

    const [config] = this.deserializer(rawConfig);

    return config as AppConfig;
  }

  save(config: AppConfig): void {
    const [handler, reason] = fs.open(this.fileName, "w");

    if (handler === undefined) {
      throw new Error(`Unable to obtain config file lock: ${reason}`);
    }

    handler.write(this.serializer(config));
    handler.close();
  }
}
