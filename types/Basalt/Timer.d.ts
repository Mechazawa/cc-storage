declare interface Timer {
  /**
   * Cancels the timer
   *
   * @returns {object} The object
   */
  cancel(): object;

  /**
 * `onCall(self)`<br>
A custom event which gets triggered as soon as the current timer has finished
 *
 */
  onCall(): void;

  /**
   * sets the time the timer should wait after calling your function
   *
   * @param the time to delay
   * @param how often it should be repeated -1 is infinite
   * @returns {object} The object
   */
  setTime(the: number, how: number): object;

  /**
   * Starts the timer
   *
   * @returns {object} The object
   */
  start(): object;
}
