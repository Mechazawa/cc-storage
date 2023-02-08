import ConfigFile from "./ConfigFile";
import { DeviceType } from "./Config";
import StateManager from "./StateManager";
import Server from "./apps/Server";
import App from "./apps/App";
import setup from "./setup";
import Crafter from "./apps/Crafter";
import Client from "./apps/Client";

const configFile = new ConfigFile("config.json");

let config = configFile.load();

if (config === undefined) {
  config = setup();
  configFile.save(config);
}

const stateManager = new StateManager();

let app: App;

switch (config.type) {
  case DeviceType.SERVER:
    app = stateManager.load(Server, new Server(config));
    break;
  case DeviceType.CRAFTER:
    app = stateManager.load(Crafter, new Crafter(config));
    break;
  case DeviceType.CLIENT:
    app = stateManager.load(Client, new Client(config));
    break;
}

if (app === undefined) {
  throw new Error("Invalid config type: " + config.type);
}

parallel.waitForAny(
  () => {
    while (os.pullEventRaw()[0] !== "terminate");
  },
  () => app.run(),
  () => {
    while (true) {
      stateManager.dump(app);
      sleep(1);
      while (os.pullEventRaw() === undefined);
    }
  }
);

stateManager.cleanup();

print("Exited safely");
