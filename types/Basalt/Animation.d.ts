declare interface Animation {
  /**
 * Adds a new function to an animation
#### Parameters:
1. `function` The function containing animation logic
 *
 * @param fn The function containing animation logic
 * @returns {Animation} Animation in use
 * @usage This will set the button position to 3,3, waits 1 second, then sets position to 4,4, waits 2 seconds, and then sets the position to 5,5
 * ```lua
 * local mainFrame = basalt.createFrame()
 * local testButton = mainFrame:addButton()
 * local aAnimation = mainFrame:addAnimation():add(function() testButton:setPosition(3,3) end):wait(1):add(function() testButton:setPosition(1,1,"r") end):wait(2):add(function() testButton:setPosition(1,1,"r") end)
 * aAnimation:play()
 * ```
 */
  add(fn: Function): Animation;

  /**
   * Adds a new easing curve into the available easing list. Checkout the animation object if you want to know how this works.
   *
   * @param name The name of the curve you want to use.
   * @param fn The function to call
   * @returns {Animation} Animation in use
   * @usage Creates a new curve
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton)
   *
   * local function easeInBack(t) -- t is the time from 0 to 1
   *     local c1 = 1.70158;
   *     local c3 = c1 + 1
   *     return c3*t^3-c1*t^2
   * end
   *
   * aAnimation:addMode("coolEaseInBack", easeInBack)
   * aAnimation:setMode("coolEaseInBack"):move(15,3,2):play()
   * ```
   */
  addMode(name: string, fn: Function): Animation;

  /**
   * Cancels the animation
   *
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton()
   * local aAnimation = mainFrame:addAnimation():add(function() testButton:setBackground(colors.black) end):wait(1):add(function() aAnimation:cancel() end):wait(1):add(function() testButton:setBackground(colors.lightGray) end)
   *
   * aAnimation:play()
   * ```
   */
  cancel(): Animation;

  /**
   * Changes the background color while the animation is running
   *
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):changeTextColor(2, 0, colors.red, colors.yellow, colors.green):play()
   * ```
   * ```xml
   * <animation object="buttonToAnimate" play="true">
   *     <background>
   *         <color>red</color>
   *         <color>yellow</color>
   *         <color>green</color>
   *         <duration>2</duration>
   *     </background>
   * </animation>
   * ```
   */
  changeBackground(duration: number, time: number): Animation;

  /**
   * Changes the text while animation is running
   *
   * @param multiple text strings - example: {"i", "am", "groot"}
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):changeText(2, 0, "i", "am", "groot"):play()
   * ```
   * ```xml
   * <animation object="buttonToAnimate" play="true">
   *     <text>
   *         <text>i</text>
   *         <text>am</text>
   *         <text>groot</text>
   *         <duration>2</duration>
   *     </text>
   * </animation>
   * ```
   */
  changeText(multiple: string[], duration: number, time: number): Animation;

  /**
   * Changes the text color while the animation is running
   *
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):changeTextColor(2, 0, colors.red, colors.yellow, colors.green):play()
   * ```
   * ```xml
   * <animation object="buttonToAnimate" play="true">
   *     <textColor>
   *         <color>red</color>
   *         <color>yellow</color>
   *         <color>green</color>
   *         <duration>2</duration>
   *     </textColor>
   * </animation>
   * ```
   */
  changeTextColor(duration: number, time: number): Animation;

  /**
   * Moves the object which got defined by setObject
   *
   * @param x coordinate
   * @param y coordinate
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @param object - optional, you could also define the object here
   * @returns {Animation} Animation in use
   * @usage Takes 2 seconds to move the object from its current position to x15 y3
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):move(15,3,2):play()
   * ```
   * ```xml
   * <animation object="buttonToAnimate" play="true">
   * <move><x>15</x><y>6</y><duration>2</duration></move>
   * </animation>
   * ```
   */
  move(x: number, y: number, duration: number, time: number, object?: any): Animation;

  /**
   * Changes the offset on the object which got defined by setObject
   *
   * @param x offset
   * @param y offset
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @param object - optional, you could also define the object here
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local subFrame = mainFrame:addFrame("frameToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(subFrame):offset(1,12,1):play()
   * ```
   * ```xml
   * <animation object="frameToAnimate" play="true">
   * <offset><x>1</x><y>12</y><duration>1</duration></offset>
   * </animation>
   * ```
   */
  offset(x: number, y: number, duration: number, time: number, object?: any): Animation;

  /**
 * `onDone(self)`<br>
This is a event which gets fired as soon as the animation has finished.
 *
 */
  onDone(): void;

  /**
 * `onStart(self)`<br>
This is a event which gets fired as soon as the animation is started.
 *
 */
  onStart(): void;

  /**
 * Plays the animation
#### Parameters: 
1. `boolean` Whether it will loop forever, will most likely be replaced with a count in the future
 *
 * @param Whether it will loop forever, will most likely be replaced with a count in the future
 * @returns {Animation} Animation in use
 * @usage `lua
 * local mainFrame = basalt.createFrame()
 * local testButton = mainFrame:addButton()
 * local aAnimation = mainFrame:addAnimation():add(function() testButton:setBackground(colors.black) end):wait(1):add(function() testButton:setBackground(colors.gray) end):wait(1):add(function() testButton:setBackground(colors.lightGray) end)
 * 
 * aAnimation:play() -- changes the background color of that button from black to gray and then to lightGray 
 * ```
 */
  play(Whether: boolean): Animation;

  /**
   * Changes the easing curve. If you want to test them, here is a interesting website: https://easings.co
   *
   * @param name The name of the curve you want to use.
   * @returns {Animation} Animation in use
   * @usage Takes 2 seconds to move the object from its current position to x15 y3
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):setMode("easeInBounce"):move(15,3,2):play()
   * ```
   */
  setMode(name: string): Animation;

  /**
   * Sets the object which the animation should reposition/resize
   *
   * @param object
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton()
   * local aAnimation = mainFrame:addAnimation():setObject(testButton)
   * ```
   *
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * ```
   * ```xml
   * <animation object="buttonToAnimate" />
   * ```
   */
  setObject(object: BObject): Animation;

  /**
   * Changes the size on the object which got defined by setObject
   *
   * @param width
   * @param height
   * @param duration in seconds
   * @param time - time when this part should begin (offset to when the animation starts - default 0)
   * @param object - optional, you could also define the object here
   * @returns {Animation} Animation in use
   * @usage `lua
   * local mainFrame = basalt.createFrame()
   * local testButton = mainFrame:addButton("buttonToAnimate")
   * local aAnimation = mainFrame:addAnimation():setObject(testButton):size(15,3,1):play()
   * ```
   * ```xml
   * <animation object="buttonToAnimate" play="true">
   * <offset><w>15</w><h>3</h><duration>1</duration></offset>
   * </animation>
   * ```
   */
  size(width: number, height: number, duration: number, time: number, object?: BObject): Animation;

  /**
 * Sets a wait timer for the next function after the previous function got executed, no wait timer calls the next function immediately
#### Parameters: 
1. `number` The length of delay between the functions _(in seconds)_
 *
 * @param The length of delay between the functions _(in seconds)_
 * @returns {Animation} Animation in use
 * @usage `lua
 * local mainFrame = basalt.createFrame()
 * local testButton = mainFrame:addButton()
 * local aAnimation = mainFrame:addAnimation():add(function() testButton:setPosition(3,3) end):wait(1):add(function() testButton:setPosition(1,1,"r") end):wait(2):add(function() testButton:setPosition(1,1,"r") end)
 * 
 * aAnimation:play()
 * ```
 */
  wait(The: number): Animation;
}
