import Serializable from "./Serializable";

export interface Job<T> {
  method: keyof T;
  params: (string | number | boolean)[];
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

  serialise(): LuaMap<string, any> {
    return {
      failed: this.failed,
      queue: this.queue,
      running: this.running,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>) {
    const instance: Queue<object> = new this<object>(input.get("fileName"));
    const running: RunningJob<object> = input.get("running");

    instance.failed = input.get("failed") ?? [];
    instance.queue = input.get("queue") ?? [];

    if (running !== undefined) {
      instance.failed.push({
        ...running,
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

    if (this.running === undefined) {
      return;
    }

    try {
      const methodName = this.running.method;
      const fn = this.handler[methodName];

      if (typeof fn === "function") {
        fn(...this.running.params);
      } else {
        throw new Error(`Expected "${methodName as string}" of handler to be "function", got "${typeof fn}" instead.`);
      }
    } catch (e) {
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
