import Logger from "../Logger";

export default class Thread<T extends (...args: any[]) => any> {
  static env: any[] = [];
  static envId = 0;

  lastEnvId = 0;
  thread?: LuaThread;

  constructor(fn: T) {
    this.thread = coroutine.create(() => fn());
  }

  /**
   * Yields to the thread, must be called until the thread is dead
   * @returns alive
   * @throws if thread is dead or if it throws
   */
  resume(): boolean {
    if (this.thread === undefined) {
      return false;
    }

    if (this.lastEnvId === Thread.envId) {
      Thread.env = [...os.pullEventRaw()];
      Thread.envId++;
    }

    const [ok, err] = coroutine.resume(this.thread, ...Thread.env);
    this.lastEnvId = Thread.envId;

    if (!ok) {
      throw err;
    }

    return this.alive();
  }

  alive(): boolean {
    if (this.thread === undefined) {
      return false;
    }

    const status = coroutine.status(this.thread);

    return status !== "dead";
  }
}
