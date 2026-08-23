import Logger from "./Logger";

export default function benchmark<T extends Function>(logger: Logger, fn: T, name: string): T {
  return ((...args: any[]) => {
    let start = os.epoch("utc");

    const output = fn(...args);
    const duration = os.epoch("utc") - start;

    logger.debug(`[B] ${name}: ${duration / 1000} seconds`);

    return output;
  }) as unknown as T;
}

export function benchmarked<This extends { logger: Logger }, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
  const name = String(context.name);

  return function (this: This, ...args: Args): Return {
    return benchmark(this.logger, () => target.apply(this, args), name)();
  };
}
