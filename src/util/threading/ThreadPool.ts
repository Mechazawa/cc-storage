import Logger from "../Logger";
import AutoYield from "./AutoYield";
import Thread from "./Thread";

export default class ThreadPool {
  size: number;
  pool: Thread<any>[] = [];

  logger = new Logger();

  running: (Thread<any> | undefined)[] = [];
  yielder = new AutoYield();

  constructor(size: number, pool: (Function | Thread<any>)[] = []) {
    this.size = size;

    this.push(...pool);
  }

  push(...input: (Function | Thread<any>)[]) {
    for (const item of input) {
      if (typeof item === "function") {
        this.pool.push(new Thread<any>(item));
      } else {
        this.pool.push(item);
      }
    }
  }

  join() {
    while (this.resume()) {
      this.yielder.tick();
    }
  }

  resume() {
    let running = false;

    for (let i = 0; i < this.size; i++) {
      const thread = this.running[i];

      if (thread === undefined || !thread.resume()) {
        this.running[i] = this.pool.pop();
      }

      running = running || this.running[i] !== undefined;
    }

    return running;
  }
}
