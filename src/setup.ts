import { AppConfig, ClientConfig, CrafterConfig, DeviceType, ServerConfig } from "./Config";
import { RecipeType } from "./crafting/Recipe";

const deviceTypes = Object.values(DeviceType) as string[];

function deviceCompleteFn(partial: string) {
  return deviceTypes.filter((t) => t.toLowerCase().startsWith(partial)).map((t) => t.substring(partial.length));
}

export default function setup(): AppConfig {
  print("No config found, starting setup procedure");
  write("Config type: ");

  const deviceType = read(undefined, undefined, (x) => deviceCompleteFn(x));

  print("Make sure that the only connected storage is the target storage");
  write("Press return to continue");
  read();

  const storage = peripheral.find("inventory").map(x => peripheral.getName(x));

  print(`Found ${storage.length} storage containers`);

  switch(deviceType) {
    case DeviceType.SERVER:
      return {
        hostname: "storage",
        type: DeviceType.SERVER,
        storage,
        defragInterval: 600,
      } as ServerConfig;
    case DeviceType.CRAFTER:
      return {
        hostname: "crafter",
        type: DeviceType.CRAFTER,
        storage,
        recipeTypes: [RecipeType.CRAFTING_TABLE],
      } as CrafterConfig;
    case DeviceType.CLIENT:
      return {
        hostname: "client",
        type: DeviceType.CLIENT,
        host: "storage", 
        storage,
      } as ClientConfig;
    default:
      throw new Error(`Could not generate config for "${deviceType}"`);
  }
}
