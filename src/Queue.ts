import Logger from "./Logger";
import Serializable from "./Serializable";

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
}

export default class Queue<T extends object> extends Serializable {
  readonly MAX_SIZE = 512;
  queue: Job<T>[] = [];
  failed: FailedJob<T>[] = [];
  // only set while `work()` is running, used for checking if we got intterupted during work
  running?: RunningJob<T>;
  handler?: T;
  logger: Logger;

  constructor(handler?: T, logger: Logger = new Logger()) {
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
      running: this.running !== undefined ? this.serialiseJob(this.running) : undefined,
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
    const running: RunningJob<T> = input.get("running");

    instance.failed = ((input.get("failed") ?? []) as FailedJob<T>[]).map((job) => this.deserializeJob(job));
    instance.queue = ((input.get("queue") ?? []) as FailedJob<T>[]).map(this.deserializeJob);

    if (running !== undefined) {
      instance.failed.push({
        ...this.deserializeJob(running),
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

  work(): void {
    if (this.handler === undefined) {
      throw new Error("No handler defined");
    }

    this.running = {
      ...this.queue.shift(),
      startTime: os.epoch("local"),
    } as RunningJob<T>;

    this.running.callbackArgs = this.running.callbackArgs ?? [];

    const methodName = this.running.method;

    if (this.running === undefined || methodName === undefined) {
      return;
    }

    try {
      this.logger.log(`[q] work: ${methodName as string}`);

      const keyType = typeof this.handler[methodName];

      if (keyType === "function") {
        // note that I'm not placing the method in a temp
        // var because it breaks the self reference in lua.
        const output = (this.handler[methodName] as Function)(...this.running.params);

        this.running.callbackArgs.push(output);
        this.running.callback?.(...this.running.callbackArgs);
      } else {
        throw new Error(`Expected "${methodName as string}" of handler to be "function", got "${keyType}" instead.`);
      }
    } catch (error) {
      this.logger.error("[q] fail: " + error);
      this.running.callbackArgs.push(error);
      this.failed.push({
        ...this.running,
        reason: error,
        endTime: os.epoch("local"),
      } as FailedJob<T>);

      // todo: setting the last param to let the callback know if it's successful is pretty jank
      this.running.callback?.(...this.running.callbackArgs);
    } finally {
      this.running = undefined;
    }
  }
}
