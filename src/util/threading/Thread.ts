export default class Thread<T extends (...args: any[]) => any> {
  fn: T;
  thread?: LuaThread;
  
  constructor(fn: T) {
    this.fn = fn;
  }

  run(): boolean {
    if (this.thread === undefined) {
      this.thread = coroutine.create(() => this.fn());
    }
    
    // todo: do i have to keep calling this?
    coroutine.resume(this.thread);

    return this.alive();
  }

  alive(): boolean
  {
    if (this.thread === undefined) {
      return false;
    }

    const status = coroutine.status(this.thread);

    return status !== 'dead';
  }
}