/** @noSelf */
declare interface BinaryReadHandle extends ReadHandle {
  seek(whence: string, offset?: number): LuaMultiReturn<[number?, string?]>;
}
