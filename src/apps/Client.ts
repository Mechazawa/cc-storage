import { ClientConfig } from "../Config";
import RecipeManager from "../crafting/RecipeManager";
import App from "./App";
import loadCraftingTableRecipes from "../crafting/recipes/craftingTable";
import { ServerRPC } from "./Server.d";
import RPC from "../RPC";

export default class Client extends App {
  recipeManager: RecipeManager;
  server?: ServerRPC;

  declare config: ClientConfig;

  constructor(config: ClientConfig) {
    super(config);

    this.recipeManager = new RecipeManager();
  }

  connect() {
    RPC.openModems();

    const uri = `${RPC.protocol}://${this.config.host}`;
    const hostId = rednet.lookup(RPC.protocol, this.config.host);

    if (hostId === undefined) {
      throw new Error(`Could not find ${uri}`);
    }

    if (typeof hostId === "number") {
      this.server = RPC.wrap(hostId) as ServerRPC | undefined;
    } else {
      this.server = RPC.wrap(hostId[0]) as ServerRPC | undefined;
    }

    if (this.server === undefined) {
      throw new Error(`Could not connect to ${uri}`);
    }

    this.server.ping();

    this.logger.log(`Connected to ${uri}`);
  }

  run(): void {
    this.connect();

    loadCraftingTableRecipes(this.recipeManager);

    const recipeCount = Object.keys(this.recipeManager.recipes).length;

    this.logger.info(`Loaded ${recipeCount} recipes`);

    parallel.waitForAny();
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
