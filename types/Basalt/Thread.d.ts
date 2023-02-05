declare interface Thread {
  /**
   * Returns the current thread status
   *
   * @returns {string} current status - ("running", "normal", "suspended", "dead")
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local aThread = mainFrame:addThread()
   * basalt.debug(aThread:getStatus())
   * ```
   */
  getStatus(): string;

  /**
 * starts a new thread and executes the function
#### Parameters: 
1. `function` the function which should be executed
 *
 * @param fn the function which should be executed
 * @returns {this} The object in use
 * @usage Starts a new thread
 * ```lua
 * local mainFrame = basalt.createFrame()
 * local aThread = mainFrame:addThread()
 * local function randomThreadFunction()
 *     while true do
 *         basalt.debug("Thread is active")
 *         os.sleep(1) -- a sleep/coroutine.yield() or pullEvent is required otherwise we will never come back to the main program (error)
 *     end
 * end
 * aThread:start(randomThreadfunction)
 * ```
 * you are also able to start threads via xml:
 * ```lua
 *     basalt.setVariable("myThread", function() while true do os.sleep(1) end end)
 * ```
 * ```xml
 * <thread thread="myThread" start="true"/>
 * ```
 */
  start(fn: Function): this;

  /**
   * stops the currently running thread
   *
   * @returns {this} The object in use
   * @usage Stops the current running thread by clicking on a button
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aThread = mainFrame:addThread()
   * local function randomThreadFunction()
   *     while true do
   *         basalt.debug("Thread is active")
   *         os.sleep(1) -- a sleep/coroutine.yield() or pullEvent is required otherwise we will never come back to the main program (error)
   *     end
   * end
   * aThread:start(randomThreadfunction)
   * local aButton = mainFrame:addButton():setText("Stop Thread"):onClick(function() aThread:stop() end)
   * ```
   */
  stop(): this;
}
