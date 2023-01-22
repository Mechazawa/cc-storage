/** @noSelf */
declare interface WriteHandle extends HandleGeneric {
  write(value: string): void;
  writeLine(value: string): void;
  flush(): void;
}
