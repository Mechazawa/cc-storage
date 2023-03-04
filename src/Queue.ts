import Logger from "./util/Logger";
import Serializable from "./Serializable";
import benchmark from "./util/benchmark";

type JobCallback = (...args: any[]) => any;

export interface Job<T> {
  method: keyof T;
  params: (string | number | boolean)[];
  callback?: JobCallback | void;
  callbackArgs?: any[];
}

export interface RunningJob<T> extends Job<T> {
  startTime: number;
}

export interface FailedJob<T> extends RunningJob<T> {
  reason: string;
  endTime: number;
  notified: boolean;
}

export default class Queue<T extends object> extends Serializable {
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

  serialiseJob(job: Job<T>): object {
    const data: any = { ...job };

    if (typeof data.callback === "function") {
      data.callback = string.dump(data.callback);
    }

    return data;
  }

  serialise(): LuaMap<string, any> {
    return {
      failed: this.failed.map(this.serialiseJob),
      queue: this.queue.map(this.serialiseJob),
      running: this.running.map((x) => this.serialiseJob(x)),
    } as object as LuaMap<string, any>;
  }

  static deserializeJob<T extends Job<any>>(job: T): T {
    const output = { ...job };

    if (typeof output.callback === "string") {
      const [fn, failReason] = loadstring(output.callback);

      if (fn !== undefined) {
        output.callback = (...args: any[]) => (fn as JobCallback)(...args);
      } else {
        throw new Error("Failed Queue job callback deserialization: " + failReason);
      }
    }

    return output;
  }

  static deserialize<T extends object = object>(input: LuaMap<string, any>): Queue<T> {
    const instance: Queue<T> = new this<T>(input.get("fileName"));
    const running: RunningJob<T>[] = input.get("running");

    instance.failed = ((input.get("failed") ?? []) as FailedJob<T>[]).map((job) => this.deserializeJob(job));
    instance.queue = ((input.get("queue") ?? []) as Job<T>[]).map(this.deserializeJob);

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

  push(job: Job<T>): boolean {
    if (this.queue.length < this.MAX_SIZE) {
      this.queue.push(job);
      return true;
    }

    return false;
  }

  notifyFailed() {
    for (const fail of this.failed) {
      if (!fail.notified) {
        this.logger.warn(`[q] Notifying failed job (${fail.reason})`);
        fail.callback?.(...(fail.callbackArgs ?? []), fail.reason, false);

        fail.notified = true;
      }
    }
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
          methodName as string
        )();

        running.callbackArgs.push(output);
        running.callback?.(...running.callbackArgs);
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
      running.callback?.(...running.callbackArgs);
    } finally {
      this.running = this.running.filter((x) => x !== running);
    }
  }
}
