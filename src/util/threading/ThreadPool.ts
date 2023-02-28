import Logger from "../Logger";
import Thread from "./Thread";

export default class ThreadPool {
  size: number;
  pool: Thread<any>[] = [];

  logger = new Logger();

  constructor(size: number, pool: (Function | Thread<any>)[] = []) {
    this.size = size;

    this.push(...pool);

    this.logger.showDebug = false;
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

  run() {
    const threads: (Thread<any> | undefined)[] = [];
    let running = true;

    while (running) {
      running = false;

      for (let i = 0; i < this.size; i++) {
        const thread = threads[i];

        if (thread === undefined || !thread.resume()) {
          threads[i] = this.pool.pop();
        }

        running = running || threads[i] !== undefined;
      }
    }
  }
}
