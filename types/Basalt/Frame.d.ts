import { BObject } from "./BObject";

declare interface Frame {
  /**
   * Adds a new XML Layout into your frame.
   *
   * @param Path to your layout
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame and adds the mainframe.xml layout
   * ```lua
   * local myFrame = basalt.createFrame():addLayout("mainframe.xml")
   * ```
   * ```xml
   * <frame layout="mainframe.xml"></frame>
   * ```
   */
  addLayout(Path: string): Frame;

  /**
   * Adds a new XML Layout as string into your frame.
   *
   * @param xml
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame and adds the mainframe.xml layout
   * ```lua
   * local myFrame = basalt.createFrame():addLayoutFromString("<button x='12' y='5' bg='black' />")
   * ```
   */
  addLayoutFromString(xml: string): Frame;

  /**
 * Adds a new object. Don't use add&#60;Object&#62; please use addTheObjectYouNeed For example if you want a new Frame, use
addFrame, if you want to add a button, use addButton
 *
 * @deprecated
 * @param optional - the id if you don't add a id it will autimatically generate one for you
 * @returns The new object you've created
 * @usage Creates some example objects
 * ```lua
 * local main = basalt.createFrame()
 * local button = main:addButton()
 * local label = main:addLabel()
 * local frame = main:addFrame()
 * ```
 */
  add<T extends BObject>(optional: string): T;

  /**
   * Gets the currently focused object
   *
   * @returns {BObject} The currently focused object
   * @usage Gets the currently focused object from the frame, storing it in a variable
   * ```lua
   * local focusedObject = myFrame:getFocusedObject()
   * ```
   */
  getFocusedObject(): BObject;

  /**
   * returns a table of all objects this frame has created via xml (useful if you'd like to access all of them for some reason)
   *
   * @returns {BObject[]} table with objects
   */
  getLastLayout(): BObject[];

  /**
   * Returns a child object of the frame
   *
   * @param name The name of the child object
   * @usage Adds a button with id "myFirstButton", then retrieves it again through the frame object
   * ```lua
   * myFrame:addButton("myFirstButton")
   * local aButton = myFrame:getObject("myFirstButton")
   * ```
   */
  getObject(name: string): BObject;

  /**
   * unknown
   *
   */
  unknown(): void;

  /**
   * Removes the currently focused object of that frame
   *
   * @returns {Frame}} The frame being used
   * @usage Creates a new button then removes the focus from that button when clicking on it
   * ```lua
   * local main = basalt.createFrame()
   * local input = main:addInput():setFocus()
   * local aButton = main:addButton():onClick(function()
   *     main:removeFocusedObject()
   * end)
   * ```
   */
  removeFocusedObject(): Frame;

  /**
   * Removes a child object from the frame
   *
   * @returns {boolean} Whether the object with the given name was properly removed
   * @usage Adds a button with the id "myFirstButton", then removes it with the aforementioned id
   * ```lua
   * local main = basalt.createFrame()
   * main:addButton("myFirstButton"):setText("Close")
   *     :onClick(function(self)
   *         main:removeObject("myFirstButton") -- or main:removeObject(self)
   *     end)
   * ```
   */
  removeObject(): boolean;

  /**
   * Sets the text, background, and foreground of the upper bar of the frame, accordingly.
   *
   * @param title The title text to set the bar to
   * @param background The background color
   * @param foreground The foreground color
   * @returns {Frame}} The frame being used
   * @usage Set the title to "My first frame!", with a background of black and a foreground of light gray.
   * ```lua
   * frame:setBar("My first Frame!", colors.black, colors.lightGray)
   * ```
   * * Store the frame, use the named frame variable after assigning.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local myFrame = MainFrame:addFrame()
   * myFrame:setBar("My first Frame!")
   * ```
   * * This abuses the call-chaining that Basalt uses.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local myFrame = mainFrame:addFrame():setBar("My first Frame!")
   * ```
   * ```xml
   * <frame barText="My first Frame!" barBG="black" barFG="lightGray"></frame>
   * ```
   */
  setBar(title: string, background: number, foreground: number): Frame;

  /**
   * Sets the frame's bar-text alignment
   *
   * @param alignment Can be supplied with "left", "center", or "right"
   * @returns {Frame} The frame being used
   * @usage Set the title of myFrame to "My first frame!", and align it to the right.
   * ```lua
   * myFrame:setBar("My first Frame!"):setBarTextAlign("right")
   * ```
   * ```xml
   * <frame barAlign="right"></frame>
   * ```
   */
  setBarTextAlign(alignment: "left" | "center" | "right"): Frame;

  /**
   * Sets the currently focused object
   *
   * @param child The child object to focus on
   * @returns {Frame}} The frame being used
   * @usage Creates a new button, sets the focused object to the previously mentioned button
   * ```lua
   * local aButton = myFrame:addButton()
   * myFrame:setFocusedObject(aButton)
   * ```
   */
  setFocusedObject(child: BObject): Frame;

  /**
   * mirrors this frame to another peripheral monitor object.
   *
   * @param name The monitor name ("right", "left",... "monitor_1", "monitor_2",...)
   * @returns {Frame}} The frame being used
   * @usage Creates mirror of your main frame to a monitor on the left side.
   * ```lua
   * local mainFrame = basalt.createFrame():setMirror("left")
   * ```
   * ```xml
   * <frame mirror="left"></frame>
   * ```
   */
  setMirror(name: string): Frame;

  /**
   * You can set base frames as monitor frames, don't try to use setMonitor on sub frames
   *
   * @param optional a number between 0.5 to 5 which sets the monitor scale
   * @returns {Frame} The frame being used
   * @usage Creates a new monitor frame, you can use to show objects on a monitor.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local monitorFrame = basalt.createFrame():setMonitor("right")
   * monitorFrame:addLabel():setText("Hellooo!")
   * ```
   * ```xml
   * <frame monitor="right"></frame>
   * ```
   *
   * * Here is a example on how to create mutlimonitors. You always have to start on the top left of your screen and go to the bottom right, which means in this example
   * monitor_1 is always your most top left monitor while monitor_6 is your most bottom right monitor.
   *
   * Table structure:
   * local monitors = {
   *     [y1] = {x1,x2,x3},
   *     [y2] = {x1,x2,x3}
   *     ...
   */
  setMonitor(optional?: number | string): Frame;

  /**
   * Changes the scale on the the monitor which the frame is attached to
   *
   * @param scale A number from 0.5 to 5
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame, sets the frame as a monitor frame and changes the monitor scale
   * ```lua
   * local myFrame = basalt.createFrame()setMonitor("left"):setMonitorScale(2)
   * myFrame:addLabel("Monitor scale is bigger")
   * ```
   */
  setMonitorScale(scale: number): Frame;

  /**
   * Sets whether the frame can be moved. _In order to move the frame click and drag the upper bar of the frame_
   *
   * @param moveable Whether the object is movable
   * @returns {Frame}} The frame being used
   * @usage Creates a frame with id "myFirstFrame" and makes it movable
   * ```lua
   * local myFrame = basalt.createFrame():setMovable(true)
   * ```
   * ```xml
   * <frame moveable="true"></frame>
   * ```
   */
  setMovable(moveable: boolean): Frame;

  /**
 * Sets the frame's coordinate offset. The frame's child objects will receive the frame's coordinate offset. For example, when using a scrollbar, if you use its value to add an offset to a frame, you will get a scrollable frame.
Objects are also able to ignore the offset by using :ignoreOffset() (For example, you may want to ignore the offset on the scrollbar itself)
 *
 * @param x direction offset (+/-)
 * @param y direction offset (+/-)
 * @returns {Frame}} The frame being used
 * @usage Creates a new base frame with x offset of 5 and a y offset of 3
 * ```lua
 * local myFrame = basalt.createFrame():setOffset(5, 3)
 * ```
 * * Creates with x offset of 5 and a y offset of -5 (Meaning if you added a button with y position 5, it would be at y position 0)
 * ```lua
 * local myFrame = basalt.createFrame():setOffset(5, -5)
 * ```
 * ```xml
 * <frame xOffset="5" yOffset="-5"></frame>
 * ```
 */
  setOffset(x: number, y: number): Frame;

  /**
   * Makes the frame scrollable with mousewheel.
   *
   * @param scrollable or not
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame and makes it scrollable
   * ```lua
   * local myFrame = basalt.createFrame():setScrollable()
   * ```
   * ```xml
   * <frame scrollable="true"></frame>
   * ```
   */
  setScrollable(scrollable: boolean): Frame;

  /**
   * Sets the maximum offset it is allowed to scroll
   *
   * @param maximum y offset
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame and makes it scrollable and sets the maximum amount to 25
   * ```lua
   * local myFrame = basalt.createFrame():setScrollable():setScrollAmount(25)
   * ```
   * ```xml
   * <frame scrollAmount="25"></frame>
   * ```
   */
  setScrollAmount(maximum: number): Frame;

  /**
   * Sets the default theme, of that frame children objects always try to get the theme of its parent frame, if it does not exist it goes to its parent parent frame, and so on until it reaches the basalt manager's theme - which is stored in theme.lua (Please checkout [theme](https://github.com/Pyroxenium/Basalt/blob/master/Basalt/theme.lua) for how it could look like.
   *
   * @param theme layout look into [theme](https://github.com/Pyroxenium/Basalt/blob/master/Basalt/theme.lua) for a example
   * @returns {Frame}} The frame being used
   * @usage Creates a new base frame and adds a new theme which only changes the default color of buttons.
   *
   * ```lua
   * local myFrame = basalt.createFrame():setTheme({
   *     ButtonBG = colors.yellow,
   *     ButtonText = colors.red,
   * })
   * ```
   */
  setTheme(theme: LuaMap<string, number> | { [key: string]: number }): Frame;

  /**
   * Toggles the frame's upper bar
   *
   * @returns {Frame}} The frame being used
   * @usage Sets myFrame to have a bar titled "Hello World!" and subsequently displays it.
   * ```lua
   * myFrame:setBar("Hello World!"):showBar()
   * ```
   * ```xml
   * <frame bar="true"></frame>
   * ```
   */
  showBar(): Frame;
}
