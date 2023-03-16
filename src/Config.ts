import { RecipeType } from "./crafting/Recipe";

export enum DeviceType {
  SERVER = "server",
  CLIENT = "client",
  CRAFTER = "crafter",
  PROVIDER = "provider",
}

interface BaseConfig {
  hostname: string;
  type: DeviceType;
  storage: string[];

  logTimestamp?: boolean;
  logFile?: string;
  logRotate?: number;
}

type minutes = number;
export type AppConfig = ServerConfig | ClientConfig | CrafterConfig | ProviderConfig;

export interface ServerConfig extends BaseConfig {
  type: DeviceType.SERVER;
  defragInterval: minutes;
}

export interface ClientConfig extends BaseConfig {
  type: DeviceType.CLIENT;
  host: string;
}

export interface CrafterConfig extends BaseConfig {
  type: DeviceType.CRAFTER;
  recipeTypes: RecipeType[];
}
export interface ProviderConfig extends BaseConfig {
  type: DeviceType.PROVIDER;
}
