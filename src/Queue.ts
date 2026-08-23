import Logger from "./util/Logger";
import Serializable from "./Serializable";
import benchmark from "./util/benchmark";

type JobCallback = (...args: any[]) => any;

export interface Job<T> {
  method: keyof T;
  params: (string | number | boolean)[];
  /** Key into {@link Queue.callbacks}. Functions cannot be serialised, so the job stores a name. */
  callback?: string;
  callbackArgs?: any[];
}

export interface RunningJob<T> extends Job<T> {
  startTime: number;
}

export interface JobProgress {
  name: string;
  target: string;
  done: number;
  total: number;
  error?: string;
}

export interface FailedJob<T> extends RunningJob<T> {
  reason: string;
  endTime: number;
  notified: boolean;
}

export default class Queue<T extends object> extends Serializable {
  static readonly callbacks = new LuaMap<string, JobCallback>();

  readonly MAX_SIZE = 512;
  queue: Job<T>[] = [];
  failed: FailedJob<T>[] = [];
  // only set while `work()` is running, used for checking if we got intterupted during work
  running: RunningJob<T>[] = [];
  handler: T;
  logger: Logger;

  constructor(handler: T, logger: Logger = new Logger()) {
    super();
    this.handler = handler;
    this.logger = logger;
  }

  serialize(): LuaMap<string, any> {
    return {
      failed: this.failed,
      queue: this.queue,
      running: this.running,
    } as object as LuaMap<string, any>;
  }

  static deserialize<T extends object = object>(input: LuaMap<string, any>): Queue<T> {
    const instance: Queue<T> = new this<T>(input.get("fileName"));
    const running: RunningJob<T>[] = (input.get("running") ?? []) as RunningJob<T>[];

    instance.failed = (input.get("failed") ?? []) as FailedJob<T>[];
    instance.queue = (input.get("queue") ?? []) as Job<T>[];

    // @todo notify client about failed job
    for (const job of running) {
      instance.failed.push({
        ...job,
        notified: false,
        reason: "unexpected_reboot",
        endTime: os.epoch("local"),
      } as FailedJob<T>);
    }

    return instance;
  }

  invoke(job: Job<T>): void {
    if (job.callback === undefined) {
      return;
    }

    const callback = Queue.callbacks.get(job.callback);

    if (callback === undefined) {
      this.logger.warn(`[q] Dropping reply, unknown callback: ${job.callback}`);

      return;
    }

    callback(...(job.callbackArgs ?? []));
  }

  push(job: Job<T>): boolean {
    if (job.callback !== undefined && !Queue.callbacks.has(job.callback)) {
      throw new Error(`Unknown job callback: ${job.callback}`);
    }

    if (this.queue.length < this.MAX_SIZE) {
      this.queue.push(job);
      return true;
    }

    return false;
  }

  notifyFailed() {
    this.logger.info(`[q] Total ${this.failed.length} failed jobs`);

    for (const fail of this.failed) {
      if (!fail.notified) {
        this.logger.warn(`[q] Notifying failed job (${fail.reason})`);

        fail.callbackArgs ??= [];

        fail.callbackArgs.push(fail.reason);
        fail.callbackArgs.push(false);

        this.invoke(fail);

        fail.notified = true;
      }
    }
  }

  /** Failures nobody has been told about yet, marked as told. */
  takeFailures(): FailedJob<T>[] {
    const unreported = this.failed.filter((job) => !job.notified);

    unreported.forEach((job) => (job.notified = true));

    return unreported;
  }

  work(): void {
    const job = this.queue.shift();

    if (job === undefined) {
      return;
    }

    const running: RunningJob<T> = {
      ...job,
      startTime: os.epoch("local"),
    };

    this.running.push(running);

    running.callbackArgs = running.callbackArgs ?? [];

    const methodName = running.method;

    if (this.running === undefined || methodName === undefined) {
      return;
    }

    try {
      this.logger.log(`[q] work: ${methodName as string}`);

      const keyType = typeof this.handler[methodName];

      if (keyType === "function") {
        // note that I'm not placing the method in a temp
        // var because it breaks the self reference in lua.
        const output = benchmark(
          this.logger,
          () => (this.handler[methodName] as Function)(...running.params),
          methodName as string,
        )();

        running.callbackArgs.push(output);
        this.invoke(running);
      } else {
        throw new Error(`Expected "${methodName as string}" of handler to be "function", got "${keyType}" instead.`);
      }
    } catch (error) {
      this.logger.error("[q] fail: " + error);
      running.callbackArgs.push(`${error}`);
      running.callbackArgs.push(false);
      this.failed.push({
        ...running,
        reason: error,
        notified: true,
        endTime: os.epoch("local"),
      } as FailedJob<T>);

      // todo: setting the last param to let the callback know if it's successful is pretty jank
      this.invoke(running);
    } finally {
      this.running = this.running.filter((x) => x !== running);
    }
  }
}
