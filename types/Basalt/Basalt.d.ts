import { Frame } from "./Frame.d";

/**
 * @noSelf
 */
declare interface Basalt {
  /**
   * This starts the event and draw handler for you. The listeners will run until you stop them.
   *
   * @param optional - if you use false as the first parameter it would stop the listeners. Using false is a synonym for [`basalt.stopUpdate()`](objects/Basalt/stopUpdate.md).
   * @usage Enables the basalt listeners, otherwise the screen will not continue to update
   *
   * ```lua
   * local main = basalt.createFrame()
   * basalt.autoUpdate()
   * ```
   */
  autoUpdate(optional?: boolean): void;

  /**
   * Creates a new base-frame, you can have as many base-frames as you want, but only 1 can be active (visible) at the same time.
   * You can always switch between your base frames.
   *
   * @param id - optional (if you dont set a id it will automatically create a uuid for you)
   * @returns {Frame} object
   * @usage How to use multiple base frames:
   *
   * ```lua
   * local main1 = basalt.createFrame() -- Visible base frame on program start
   * local main2 = basalt.createFrame()
   * local main3 = basalt.createFrame()
   * main1:addButton()
   *     :setPosition(2,2)
   *     :setText("Switch")
   *     :onClick(function()
   *         main2:show() -- this function automatically "hides" the first one and shows the second one
   *     end)
   * main2:addLabel()
   *     :setText("We are currently on main2")
   * basalt.autoUpdate()
   * ```
   */
  createFrame(id?: string): Frame;

  /**
   * Creates a label with some information on the main frame on the bottom left. When you click on that label it will open a log view for you. See it as the new print for debugging
   *
   * @usage Prints "Hello! ^-^" to the debug console
   *
   * ```lua
   * basalt.debug("Hello! ", "^-^")
   * ```
   *
   * * Changes the debug label's anchor
   *
   * ```lua
   * basalt.debugLabel:setAnchor("topLeft") -- default anchor is bottomLeft
   * basalt.debug("Hello!")
   * ```
   */
  debug(...values: any[]): void;

  /**
   * Returns the currently active/visible base frame.
   *
   * @returns {Frame} The current frame
   * @usage Displays the active frame name in the debug console
   *
   * ```lua
   * local main = basalt.createFrame()
   * basalt.debug(basalt.getActiveFrame():getName()) -- returns the id
   * ```
   */
  getActiveFrame(): Frame;

  /**
   * Returns a base frame by the given id.
   *
   * @param id
   * @returns {Frame} The frame with the supplied id.
   * @usage Creates, fetches and shows the "myFirstFrame" object
   *
   * ```lua
   * local main = basalt.createFrame("firstBaseFrame")
   * local main2 = basalt.createFrame("secondBaseFrame")
   * main:addButton()
   *     :setText("Show")
   *     :onClick(function()
   *         local frame2 = basalt.getFrame("secondBaseFrame")
   *         if(frame2 ~= nil)then
   *             frame2:show()
   *         end
   *     end)
   * basalt.autoUpdate()
   * ```
   */
  getFrame(id: string): Frame;

  /**
 * Returns the current base-theme. This base-theme can be set using setTheme.md.
A list of base-theme keys can be found [here](https://github.com/Pyroxenium/Basalt/blob/master/Basalt/theme.lua).
 *
 * @returns {number} The color of the requested base-theme key.
 * @usage Displays the color of the main background in the debug console
 * 
 * ```lua
 * basalt.debug(basalt.getTheme("BasaltBG"))
 * ```
 */
  getTheme(): number;

  /**
   * Returns a variable defined with [setVariable](objects/Basalt/setVariable)
   *
   * @returns {any} The variable stored
   * @usage Displays the stored variable in the debug console
   *
   * ```lua
   * basalt.setVariable("abc", function()
   *   basalt.debug("I got clicked")
   *   return 1
   * end)
   *
   * basalt.debug(basalt.getVariable("abc")()) -- Should debug log "I got clicked" and debug log 1 (which was returned from the function)
   * ```
   *
   * ```xml
   * <button onClick="abc" text="Click me" />
   * ```
   */
  getVariable(): any;

  /**
   * Returns the currently active/visible base frame.
   *
   * @returns {string} The current version of Basalt
   * @usage Displays the version of Basalt in the debug console
   *
   * ```lua
   * basalt.debug(basalt.getVersion()) -- Example: 1.6.2
   * ```
   */
  getVersion(): string;

  /**
   * Checks if the user is currently holding a key
   *
   * @param key code (use the [keys table](https://tweaked.cc/module/keys.html) for that)
   * @returns {boolean} true or false
   * @usage Shows a debug message with true or false if the left ctrl key is down, as soon as you click on the button.
   *
   * ```lua
   * local main = basalt.createFrame()
   * local aButton = mainFrame:addButton()
   *     :setPosition(2,2)
   *     :setText("Check Ctrl")
   *     :onClick(function()
   *         basalt.debug(basalt.isKeyDown(keys.leftCtrl))
   *     end)
   * basalt.autoUpdate()
   * ```
   */
  isKeyDown(key: number): boolean;

  /**
   * This writes something into a file. The main goal is to make debugging errors easier. Lets say you'r program is crashing and you don't know why, you could use basalt.log The log files will automatically removed after you start your program again.
   *
   * @param text The text to write into the log file
   * @param _type optional (default: "Debug") - the type to write
   * @usage Writes "Hello!" into the log file
   *
   * ```lua
   * basalt.log("Hello!")
   * ```
   *
   * This should result in there beeing a file called `basaltLog.txt`. In the file it should say `[Basalt][Debug]: Hello!`.
   *
   * * Writes "Config file missing" into the log file, with warning as prefix.
   *
   * ```lua
   * basalt.log("Config file is missing", "WARNING")
   * ```
   *
   * This should result in there beeing a file called `basaltLog.txt`. In the file it should say `[Basalt][WARNING]: Config file is missing`.
   */
  log(text: string, _type?: string): void;

  /**
   * This is the top-level method to intercept an event before sending it to the object event handlers. If you use return false, the event is not passed to the event handlers.
   *
   * @param fn The function which should be called
   * @usage `lua
   * local basalt = require("basalt")
   *
   * basalt.onEvent(function(event)
   *     if(event=="terminate")then
   *         return false
   *     end
   * end)
   * ```
   */
  onEvent(fn: Function): void;

  /**
   * Removes the base frame by it's id. **This only works for base-frames.**
   *
   * @param id - ID of the base-frame.
   * @usage Removes the previously created frame with id "secondBaseFrame"
   * The frame id is gotten from a frame variable's `:getName()`
   *
   * ```lua
   * local main = basalt.createFrame("firstBaseFrame")
   * local main2 = basalt.createFrame("secondBaseFrame")
   * main:addButton()
   *     :setText("Remove")
   *     :onClick(function()
   *         basalt.removeFrame(main2:getName())
   *     end)
   * ```
   *
   * * Removes the previously created frame with id "secondBaseFrame", without frame stored in variable
   * The frame id is the frame's name
   *
   * ```lua
   * local main = basalt.createFrame("firstBaseFrame")
   * local main2 = basalt.createFrame("secondBaseFrame")
   * main:addButton()
   *     :setText("Remove")
   *     :onClick(function()
   *         basalt.removeFrame("secondBaseFrame")
   *     end)
   * ```
   */
  removeFrame(id: string): void;

  /**
   * Schedules a function which gets called in a coroutine. After the coroutine is finished it will get destroyed immediatly. It's something like threads, but with some limits.
   **A guide can be found [here](/tips/logic).**
   *
   * @param a function which should get executed
   * @returns {Function} it returns the function which you have to execute in order to start the coroutine
   * @usage Creates a schedule which switches the color between red and gray
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton():setText("Click me")
   * aButton:onClick(basalt.schedule(function(self)
   *     self:setBackground(colors.red)
   *     os.sleep(0.1)
   *     self:setBackground(colors.gray)
   *     os.sleep(0.1)
   *     self:setBackground(colors.red)
   *     os.sleep(0.1)
   *     self:setBackground(colors.gray)
   *     os.sleep(0.1)
   *     self:setBackground(colors.red)
   *     os.sleep(0.1)
   *     self:setBackground(colors.gray)
   * end))
   * ```
   */
  schedule(a: Function): Function;

  /**
   * Sets what should be the active baseframe.
   *
   * @param frame - The frame that should be the active base-frame.
   * @usage DO
   */
  setActiveFrame(frame: Frame): void;

  /**
 * Changes the drag throttle of all drag events. Default value is 50ms - which is 0.05s.
Instead of sending all mouse_drag events to the :onDrag handlers basalt sends every 0.05s (while dragging) the most recent drag event to all
drag handlers. If you need all drag events - just change the value to 0.
 *
 * @param A number in miliseconds.
 * @usage `lua
 * local basalt = require("basalt")
 * basalt.setMouseDragThrottle(0)
 * ```
 */
  setMouseDragThrottle(A: number): void;

  /**
   * This feature is only available for [CraftOS-PC](https://www.craftos-pc.cc).
   *
   * @param A number in miliseconds.
   * @usage `lua
   * local basalt = require("basalt")
   * basalt.setMouseMoveThrottle(50)
   * ```
   */
  setMouseMoveThrottle(A: number): void;

  /**
   * Sets the base theme of the project! Make sure to cover all existing objects, otherwise it will result in errors. A good example is [theme](https://github.com/Pyroxenium/Basalt/blob/master/Basalt/theme.lua). The theme can also be gotten with [`basalt.getTheme()`](objects/Basalt/getTheme)
   *
   * @param theme layout look into [theme](https://github.com/Pyroxenium/Basalt/blob/master/Basalt/theme.lua) for a example
   * @usage Sets the default theme of basalt.
   *
   * ```lua
   * basalt.setTheme({
   *     ButtonBG = colors.yellow,
   *     ButtonText = colors.red,
   *     ...,
   * })
   * ```
   */
  setTheme(theme: { [key: string]: number } | LuaMap<string, number>): void;

  /**
   * This stores a variable which you're able to access via xml. You are also able to add a function, which then gets called by object events created in XML.
   *
   * @param key key name
   * @param value any variable
   * @usage Adds a function to basalt.
   *
   * ```lua
   * basalt.setVariable("clickMe", function()
   *     basalt.debug("I got clicked")
   * end)
   *
   * ```
   *
   * ```xml
   * <button onClick="clickMe" text="Click me" />
   * ```
   */
  setVariable(key: string, value: any): void;

  /**
 * Stops the automatic draw and event handler which got started by `basalt.autoUpdate()`.
`basalt.autoUpdate(false)` also does the same.
 *
 * @usage When the quit button is clicked, the button stops basalt's event listeners and draw handlers
 * 
 * ```lua
 * local main = basalt.createFrame()
 * main:addButton()
 *     :setPosition(2,2)
 *     :setText("Stop Basalt!")
 *     :onClick(function()
 *         basalt.stopUpdate()
 *     end)
 * basalt.autoUpdate()
 * ```
 */
  stop(): void;

  /**
 * Calls the draw and event handler once - this gives more flexibility about which events basalt should process. For example you could filter the terminate event.
Which means you have to pass the events into basalt.update.
 *
 * @param event The event to be received
 * @usage Creates and starts a custom update cycle
 * 
 * ```lua
 * local mainFrame = basalt.createFrame()
 * mainFrame:addButton():setPosition(2,2)
 * while true do
 *     local ev = table.pack(os.pullEventRaw())
 *     basalt.update(table.unpack(ev))
 * end
 * ```
 */
  update(event: string): void;
}
