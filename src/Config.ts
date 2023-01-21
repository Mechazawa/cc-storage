import { RecipeType } from "./crafting/Recipe";

export enum DeviceType {
  SERVER = "server",
  CLIENT = "client",
  CRAFTER = "crafter",
}

export interface AppConfig {
  type: DeviceType;
  storage: string[];

  logTimestamp?: boolean;
  logFile?: string;
}

type minutes = number;

export interface ServerConfig extends AppConfig {
  type: DeviceType.SERVER;
  defragInterval: minutes;
}

export interface ClientConfig extends AppConfig {
  type: DeviceType.CLIENT;
  host: string;
}

export interface CrafterConfig extends AppConfig {
  type: DeviceType.CRAFTER;
  recipeTypes: RecipeType[];
}
