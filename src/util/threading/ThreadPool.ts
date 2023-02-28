import Logger from "../Logger";
import benchmark from "../benchmark";
import AutoYield from "./AutoYield";
import Thread from "./Thread";

export default class ThreadPool {
  size: number;
  pool: Thread<any>[] = [];

  logger = new Logger();

  constructor(size: number, pool: (Function | Thread<any>)[] = []) {
    this.size = size;

    this.push(...pool);

    const run = this.run.bind(this);

    this.run = benchmark(this.logger, () => run(), 'p'+size)
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
    const yielder = new AutoYield();
    let running = true;

    let lastLength = 0;
    let ticksSinceLast = 0;

    while (running) {
      running = false;

      yielder.tick();
      ticksSinceLast++;

      if (lastLength != this.pool.length) {
        lastLength = this.pool.length
        this.logger.debug(`pool ${lastLength} in ${ticksSinceLast}`);
        ticksSinceLast = 0;
      }

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
