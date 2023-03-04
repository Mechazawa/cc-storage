import Thread from "./Thread";

export default class AutoYield {
  timeout: number;

  _nextYield: number = 0;

  constructor(timeout: number = 100) {
    this.timeout = timeout;
  }

  tick() {
    const timestamp = os.epoch("utc");

    if (this._nextYield <= timestamp) {
      AutoYield.yield();

      this._nextYield = os.epoch("utc") + this.timeout;
    }
  }

  static yield() {
    const [name, ...data] = os.pullEvent();

    os.queueEvent(name, ...data);
  }
}
