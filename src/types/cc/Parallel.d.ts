/** @noSelf */
declare interface Parallel {
  /**
   * Switches between execution of the functions, until any of them
   * finishes. If any of the functions errors, the message is propagated upwards
   * from the @{parallel.waitForAny} call.
   */
  waitForAny(...fs: Function[]): void;

  /**
   * Switches between execution of the functions, until all of them are
   * finished. If any of the functions errors, the message is propagated upwards
   * from the @{parallel.waitForAll} call.
   */
  waitForAll(...fs: Function[]): void;
}
