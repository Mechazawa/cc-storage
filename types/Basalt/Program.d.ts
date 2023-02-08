import { BObject } from "./BObject.d";

declare interface Program extends BObject {
  /**
   * Executes the given path or program
   *
   * @returns {this} The object in use
   * @usage Executes worm
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgram = mainFrame:addProgram()
   * aProgram:execute("rom/programs/fun/worm.lua") -- executes worm
   * ```
   * ```xml
   * <program path="rom/programs/fun/worm.lua" execute="true" />
   * ```
   */
  execute(): this;

  /**
   * If the program is paused, incomming events will be inserted into a queued events table. As soon as the program is unpaused, the queued events table will be empty
   *
   * @returns {table} a table - {event="event", args={"a", "b",...}}
   * @usage prints the queued events table
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aProgram = mainFrame:addProgram():execute("rom/programs/shell.lua"):show()
   * mainFrame:addButton():setText("inject"):onClick(function() basalt.debug(aProgram:getQueuedEvents()) end):show()
   * ```
   * @param a table, items should be {event="event", args={para1, para2, para3, para4}}
   * @returns {this} The object in use
   */
  getQueuedEvents(a: object): this;

  /**
   * returns the current process status
   *
   * @returns {string} current status ("running", "normal, "suspended", or "dead")
   * @usage Prints current status
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgram = mainFrame:addProgram()
   * basalt.debug(aProgram:getStatus())
   * ```
   */
  getStatus(): string;

  /**
   * injects a event into the program manually. For example you could inject w a s and d for worm, by clicking buttons.
   *
   * @param event
   * @param parameter1
   * @param parameter2
   * @param parameter3
   * @param parameter4
   * @param value if this is true, the injected event will be executed even if the program is paused
   * @returns {this} The object in use
   * @usage injects a event by clicking a button
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aProgram = mainFrame:addProgram():execute("rom/programs/shell.lua"):show()
   * mainFrame:addButton():setText("inject"):onClick(function() aProgram:injectEvent("char", "w") end):show()
   * ```
   */
  injectEvent(event: string, parameter1: any, parameter2: any, parameter3: any, parameter4: any, value: boolean): this;

  /**
   * Injects multiple events
   *
   * @param data a table, items should be {event="event", args={para1, para2, para3, para4}}
   * @returns {this} The object in use
   * @usage injects a multiple char events by clicking a button
   *
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aProgram = mainFrame:addProgram():execute("rom/programs/shell.lua"):show()
   *
   * local events = {
   * {event="char", args={"h"}},
   * {event="char", args={"e"}},
   * {event="char", args={"y"}}
   */
  injectEvents(data: { event: string; args: any[] }[]): this;

  /**
   * returns if the program is paused
   *
   * @returns {boolean} pause status
   * @usage Prints the pause status of the program
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aProgram = mainFrame:addProgram():execute("rom/programs/shell.lua"):show()
   * basalt.debug(aProgram:isPaused())
   * ```
   */
  isPaused(): boolean;

  /**
   * unknown
   *
   */
  unknown(): void;

  /**
   * unknown
   *
   */
  unknown(): void;

  /**
   * pauses the current program (prevents the program from receiving events)
   *
   * @param value
   * @returns {this} The object in use
   * @usage Pauses worm by clicking a button
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aProgram = mainFrame:addProgram():execute("rom/programs/shell.lua"):show()
   * mainFrame:addButton():setText("Pause"):onClick(function() aProgram:pause(true) end):show()
   * ```
   */
  pause(value?: boolean): this;

  /**
   * Changes the default enviroment to a custom enviroment
   *
   * @param env Enviroment table
   * @returns {Program} Program in use
   */
  setEnviroment(env: object | LuaMap<string, string>): Program;

  /**
   * Stops a currently running program
   *
   * @returns {this} The object in use
   * @usage Stops worm by clicking a button
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgram = mainFrame:addProgram()
   * aProgram:execute("rom/programs/fun/worm.lua") -- executes worm
   * mainFrame:addButton():setText("Pause"):onClick(function() aProgram:stop() end):show()
   * ```
   */
  stop(): this;
}
