import Logger from "./Logger";

export default class ThreadPool {
  size: number;
  pool: Function[];

  logger = new Logger();

  constructor(size: number, pool: Function[] = []) {
    this.size = size;
    this.pool = pool;

    this.logger.showDebug = false;
  }

  push(...fn: Function[]) {
    this.pool.push(...fn);
  }

  run() {
    const threads = [];

    for (let i = 0; i < this.size; i++) {
      threads.push(
        (
          (threadId): Function =>
          () => {
            while (true) {
              const task = this.pool.pop();

              if (typeof task !== "function") {
                this.logger.debug(`thread ${threadId}/${threads.length} done`);
                return;
              }

              task();

              os.pullEvent();
            }
          }
        )(i)
      );
    }

    parallel.waitForAll(...threads);
  }
}
