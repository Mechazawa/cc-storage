import Serializable from "./Serializable";

export interface Job<T> {
  method: keyof T;
  params: (string | number | boolean)[];
  callback?: (...args: any[]) => any | void;
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

  constructor(handler?: T) {
    super();
    this.handler = handler;
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

  static deserializeJob<T>(job: any): Job<T> {
    const output = { ...job };

    if (typeof output.callback === "string") {
      output.callback = loadstring(output.callback);
    }

    return output as Job<T>;
  }

  static deserialize(input: LuaMap<string, any>) {
    const instance: Queue<object> = new this<object>(input.get("fileName"));
    const running: RunningJob<object> = input.get("running");

    instance.failed = (input.get("failed") ?? []).map(this.deserializeJob);
    instance.queue = (input.get("queue") ?? []).map(this.deserializeJob);

    if (running !== undefined) {
      instance.failed.push({
        ...this.deserializeJob(running),
        reason: "unexpected_reboot",
        endTime: os.epoch("local"),
      } as FailedJob<object>);
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
    const methodName = this.running.method;

    if (this.running === undefined || methodName === undefined) {
      return;
    }

    try {
      const fn = this.handler[methodName];

      print(`work: ${methodName as string}`);

      if (typeof fn === "function") {
        const output = fn(...this.running.params);

        this.running.callbackArgs = this.running.callbackArgs ?? [];

        this.running.callbackArgs.push(output);
        this.running.callback?.(...this.running.callbackArgs);
      } else {
        throw new Error(`Expected "${methodName as string}" of handler to be "function", got "${typeof fn}" instead.`);
      }
    } catch (e) {
      print("fail: " + e);
      this.failed.push({
        ...this.running,
        reason: e,
        endTime: os.epoch("local"),
      } as FailedJob<T>);
    } finally {
      this.running = undefined;
    }
  }
}
