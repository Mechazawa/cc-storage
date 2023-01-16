/** @noSelf */
declare interface BinaryWriteHandle extends HandleGeneric {
  write(value: string | number): void;
  flush(): void;
  seek(whence: string, offset?: number): LuaMultiReturn<[number?, string?]>;
}
