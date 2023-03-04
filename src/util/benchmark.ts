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
