import ConfigFile from "./ConfigFile";
import { DeviceType } from "./Config";
import StateManager from "./StateManager";
import Server from "./apps/Server";
import App from "./apps/App";

const lockFileName = "running.lock";

const config = new ConfigFile("config.json").load();
const recovering = fs.exists(lockFileName);

const stateManager = new StateManager();

if (!recovering) {
  const lockFile = fs.open(lockFileName, "w") as WriteHandle;

  lockFile.write("" + os.epoch("utc"));
  lockFile.close();
} else {
  print("!!DETECTED UNEXPECTED SHUTDOWN!!");
}

let app: App;

switch (config.type) {
  case DeviceType.SERVER:
    app = new Server(config);
    app = recovering ? stateManager.load(Server, app) : new Server(config);
    break;
  case DeviceType.CRAFTER:
  case DeviceType.CLIENT:
  default:
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

fs.delete(lockFileName);
stateManager.cleanup();

print("Exited safely");