import Logger from "./Logger";
import Serializable from "./Serializable";

export default class StateManager {
  fileName: string;

  constructor(fileName: string = "state.lua") {
    this.fileName = fileName;
  }

  dump<T extends Serializable>(instance: T): void {
    const file = fs.open(this.fileName, "w") as WriteHandle;
    const data = textutils.serialise(instance.serialise(), {
      compact: true,
      allow_repetitions: false,
    });

    file.write(data);
    file.flush();
    file.close();
  }

  load<T extends Serializable>(C: { deserialize(input: LuaMap<string, any>): T }, fallback: T): T {
    try {
      const file = fs.open(this.fileName, "r") as ReadHandle;
      const state = textutils.unserialise(file.readAll() ?? "{}") as LuaMap<string, any>;
  
      file.close();
  
      if (state === undefined) {
        fs.delete(this.fileName);
  
        return fallback;
      }
  
      return C.deserialize(state);
    } catch (error) {
      (new Logger()).error("Failed loading state: " + error);

      return fallback;
    }
  }
}
