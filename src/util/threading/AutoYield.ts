import Thread from "./Thread";

export default class AutoYield {
  timeout: number;

  _nextYield: number = 0;

  constructor(timeout: number = 100) {
    this.timeout = timeout;
  }

  tick() {
    const timestamp = os.epoch('utc');

    if (this._nextYield <= timestamp) {
      const [name, ...data] = os.pullEvent()
      // // print("yield " + name)
      os.queueEvent(name, ...data);

      // Thread.env = [name, ...data];
      // Thread.envId++;

      this._nextYield = os.epoch('utc') + this.timeout;
    }
  }
}