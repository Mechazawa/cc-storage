import { Frame } from "./Frame.d";

// todo figure out
type Event = string;

declare interface BObject {
  /**
   * Disables the object's event listeners
   *
   */
  disable(): void;

  /**
   * Enables the object's event listeners
   *
   */
  enable(): void;

  /**
   * Converts the relative coordinates into absolute coordinates
   *
   * @returns {this} The object in use
   * @usage Creates a frame and a button and prints the button's absolute position to the debug console
   *
   * ```lua
   * local mainFrame = basalt.createFrame():setPosition(3,3)
   * local aButton = mainFrame:addButton():setSize(8,1):setPosition(4,2)
   * basalt.debug(aButton:getAbsolutePosition()) -- returns 7,5 (frame coords + own coords) instead of 4,2
   * ```
   */
  getAbsolutePosition(): this;

  /**
   * Converts the x and y coordinates into the anchor coordinates of the object
   *
   * @returns {number} x
   * @returns {number} y
   * @usage Prints the anchor position to the debug console
   *
   * ```lua
   * local mainFrame = basalt.createFrame():setSize(15,15)
   * local aButton = mainFrame:addButton()
   *         :setAnchor("bottomRight")
   *         :setSize(8,1)
   *         :setPosition(1,1)
   * basalt.debug(aButton:getAnchorPosition()) -- returns 7,14 (framesize - own size) instead of 1,1
   * ```
   */
  getAnchorPosition(): number | number;

  /**
   * Returns the current background color
   *
   * @returns {number} color
   */
  getBackground(): number;

  /**
   * Returns the current foreground color
   *
   * @returns {number} color
   */
  getForeground(): number;

  /**
   * Returns the given name of the object
   *
   * @returns {string} name
   * @usage Prints name of object to debug window
   *
   * ```lua
   * local main = basalt.createFrame()
   * basalt.debug(main:getName()) -- returns the uuid
   * ```
   *
   * ```lua
   * local main = basalt.createFrame("myFirstMainFrame")
   * basalt.debug(main:getName()) -- returns myFirstMainFrame
   * ```
   */
  getName(): string;

  /**
   * Returns the object's position
   *
   * @returns {number} x
   * @returns {number} y
   */
  getPosition(): LuaMultiReturn<[number, number]>;

  /**
   * Returns the object's size
   *
   * @returns {number} w
   * @returns {number} h
   */
  getSize(): LuaMultiReturn<[number, number]>;

  /**
   * Returns the currently saved value
   *
   * @returns {any} Object's value
   * @usage Prints the value of the checkbox to the debug console
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aCheckbox = mainFrame:addCheckbox():setValue(true)
   * basalt.debug(aCheckbox:getValue()) -- returns true
   * ```
   */
  getValue(): any;

  /**
   * Hides the object
   *
   * @returns {this} The object in use
   * @usage Hides a frame
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local button = mainFrame:addButton():setText("Close"):onClick(function() mainFrame:hide() end)
   * ```
   *
   * ```xml
   * <button visible="false" />
   * ```
   */
  hide(): this;

  /**
   * Returns if the object is currently the focused object of the parent frame
   *
   * @returns {boolean} Whether the object is focused
   * @usage Prints whether the button is focused to the debug console
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton()
   * basalt.debug(aButton:isFocused()) -- shows true or false as a debug message
   * ```
   */
  isFocused(): boolean;

  /**
   * Returns if the object is currently visible
   *
   * @usage Prints boolean visibility of object to debug console
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton():setSize(5,8)
   * basalt.debug(aButton:isVisible()) -- returns true
   * ```
   */
  isVisible(): boolean;

  /**
   * `onChange(self)`
   *
   */
  onChange(fn: () => void): this;

  /**
   * `onChar(self, event, char)`
   *
   */
  onChar(fn: (event: Event, char: string) => void | boolean): this;

  /**
   * `onClickUp(self, event, button, x, y)`
   *
   */
  onClickUp(fn: (event: Event, button: BObject, x: number, y: number) => void | boolean): this;

  /**
   * `onClick(self, event, button, x, y)`
   *
   */
  onClick(fn: (event: Event, button: BObject, x: number, y: number) => void | boolean): this;

  /**
   * `onDrag(self, event, button, x, y, xOffset, yOffset)`
   *
   */
  onDrag(
    fn: (event: Event, button: BObject, x: number, y: number, xOffset: number, yOffset: number) => void | boolean
  ): this;

  /**
   * `onEvent(self, event, ...)`
   *
   */
  onEvent(fn: (event: Event, ...args: any[]) => void | boolean): this;

  /**
   * `onGetFocus(self)`
   *
   */
  onGetFocus(fn: () => void | boolean): this;

  /**
   * `onHover(self, event, button, x, y)`
   *
   */
  onHover(fn: (event: Event, button: BObject, x: number, y: number) => void | boolean): this;

  /**
   * `onKey(self, event, key)`
   *
   */
  onKey(fn: (event: Event, key: number) => void | boolean): this;

  /**
   * `onKeyUp(self, event, key)`
   *
   */
  onKeyUp(fn: (event: Event, key: number) => void | boolean): this;

  /**
   * `onLeave(self, event, button, x, y)`
   *
   */
  onLeave(fn: (event: Event, button: BObject, x: number, y: number) => void | boolean): this;

  /**
   * `onLoseFocus(self)`
   *
   */
  onLoseFocus(fn: () => void | boolean): this;

  /**
   * `onRelease(self, event, button, x, y)`
   *
   */
  onRelease(fn: (event: Event, button: BObject, x: number, y: number) => void | boolean): this;

  /**
   * `onReposition(self)`
   *
   */
  onReposition(fn: () => void | boolean): this;

  /**
   * `onResize(self)`
   *
   */
  onResize(fn: () => void | boolean): this;

  /**
   * `onScroll(self, event, direction, x, y)`
   *
   */
  onScroll(fn: (event: Event, direction: -1 | 1, x: number, y: number) => void | boolean): this;

  /**
   * Removes the object from it's parent frame. This won't 'destroy' the object, It will continue to exist as long as you still have pointers to it.
   */
  remove(): void;

  /**
   * Sets the anchor of the object
   *
   * @param Anchor sides `("topLeft" "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "center")`
   * @returns {this} The object in use
   * @usage Sets the button to have an anchor of `bottomRight`
   *
   * ```lua
   * local mainFrame = basalt.createFrame():show()
   * local aButton = mainFrame:addButton()
   *         :setAnchor("bottomRight")
   *         :setSize(8,1)
   *         :setPosition(-8,1)
   * ```
   *
   * ```xml
   * <button anchor="bottomRight" />
   * ```
   */
  setAnchor(Anchor: string): this;

  /**
   * Changes the object background color, if you set the value to false the background wont be visible. For example you could see trough a frame.
   *
   * @param char background symbol you want to draw (optional)
   * @returns {this} The object in use
   * @usage Creates a frame, and sets its background color to `colors.gray`, also sets a background symbol with color black.
   *
   * ```lua
   * local mainFrame = basalt.createFrame():setBackground(colors.gray, "#", colors.black)
   * ```
   *
   * ```xml
   * <button bg="gray" />
   * ```
   */
  setBackground(...char: (string | number)[]): this;

  /**
   * Sets the border of that objects, if false the border will be removed
   *
   * @param sides If you don't set sides, all 4 sides will have a border
   * @returns {this} The object in use
   * @usage Sets the border to green and shows it:
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local subFrame = mainFrame:addFrame()
   *         :setMovable()
   *         :setSize(18,6)
   *         :setBorder(colors.green, "left", "right", "bottom")
   * ```
   *
   * ```xml
   * <frame width="18" height="6" borderColor="green" movable="true" />
   * ```
   */
  setBorder(color: number | string, ...sides: string[]): this;

  /**
   * Sets the object to be the focused object.
   *If you click on an object, it's normally automatically the focused object. For example, if you call :show() on a frame, and you want this particular frame to be in
   *the foreground, you should also use :setFocus()
   *
   * @returns {this} The object in use
   * @usage Sets the button to the focused object
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton():setFocus()
   * ```
   */
  setFocus(): this;

  /**
   * Changes the object text color
   *
   * @returns {this} The object in use
   * @usage Creates a frame, and sets its foreground color to `colors.green`
   *
   * ```lua
   * local mainFrame = basalt.createFrame():setForeground(colors.green)
   * ```
   *
   * ```xml
   * <button fg="green" />
   * ```
   */
  setForeground(color: number | string): this;

  /**
   * Sets the parent frame of the object
   *
   * @param parent The to-be parent frame
   * @returns {this} The object in use
   * @usage Sets the parent frame of the random frame, adding it to the main frame when the button is clicked"
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRandomFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton():onClick(
   *         function()
   *             aRandomFrame:setParent(mainFrame)
   *         end
   */
  setParent(parent: Frame): this;

  /**
   * Changes the position relative to its parent frame
   *
   * @param Whether it will add/remove to the current coordinates instead of setting them
   * @returns {this} The object in use
   * @usage Sets the Buttons position to an x coordinate of 2 with a y coordinate of 3
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * mainFrame:addButton():setPosition(2,3)
   * ```
   *
   * ```xml
   * <button x="2" y="3" />
   * ```
   *
   * if you prefer to use dynamic values:
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * mainFrame:addButton():setPosition("parent.w * 0.5", 23)
   * ```
   *
   * ```xml
   * <button x="parent.w * 0.5" y="3" />
   * ```
   */
  setPosition(x: number | string, y: number | string, offset?: boolean): this;

  /**
   * Sets the shadow color - default: false
   *
   * @returns {this} The object in use
   * @usage Sets the shadow to green and shows it:
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local subFrame = mainFrame:addFrame()
   *         :setMovable()
   *         :setSize(18,6)
   *         :setShadow(colors.green)
   * ```
   *
   * Or:
   *
   * ```xml
   * <frame width="18" height="6" shadowColor="green" movable="true" />
   * ```
   */
  setShadow(color: string | number): this;

  /**
   * Changes the object size
   *
   * @returns {this} The object in use
   * @usage Sets the frame to have a width of 15 and a height of 12
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local subFrame = mainFrame:addFrame():setSize(15,12)
   * ```
   *
   * ```xml
   * <frame width="15" height="12" />
   * ```
   */
  setSize(width: number | string, height: number | string): this;

  /**
   * Sets the value of that object (input, label, checkbox, textfield, scrollbar,...)
   *
   * @param Value to set the object to
   * @returns {this} The object in use
   * @usage Creates a checkbox and ticks it
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aCheckbox = mainFrame:addCheckbox():setValue(true)
   * ```
   *
   * ```xml
   * <checkbox value="true" />
   * ```
   */
  setValue(Value: any): this;

  /**
   * Sets the z-index. Higher value means higher draw/event priority. You can also add multiple objects to the same z-index, if so the last added object will have the highest priority.
   *
   * @param z_index
   * @returns {this} The object in use
   * @usage Sets the buttons z-index to `1` and the labels z-index to `2`
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aButton = mainFrame:addButton():setZIndex(1):setPosition(2,2)
   * local aLabel = mainFrame:addButton():setZIndex(2):setPosition(2,2):setText("I am a label!")
   * ```
   *
   * ```xml
   * <button x="2" y="2" zIndex="1" />
   * <label x="2" y="2" text="I am a label!" zIndex="2" />
   * ```
   */
  setZIndex(z_index: number): this;

  /**
   * Shows the object (only if the parent frame is already visible)
   *
   * @returns {this} The object in use
   * @usage Shows a frame
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local button = mainFrame:addButton()
   * button:show()
   * ```
   *
   * ```xml
   * <button visible="true" />
   * ```
   */
  show(): this;
}
