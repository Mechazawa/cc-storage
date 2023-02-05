import "./BObject.d";

declare interface Slider extends BObject {
  /**
   * Returns the current index
   *
   * @returns {number} index
   */
  getIndex(): number;

  /**
   * Changes the symbol in the background, default is "\140"
   *
   * @param symbol
   * @returns {this} The object in use
   * @usage Creates a new slider and changes the background symbol to X
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local slider = mainFrame:addSlider():setBackgroundSymbol("X")
   * ```
   * ```xml
   * <slider backgroundSymbol="X" />
   * ```
   */
  setBackgroundSymbol(symbol: string): this;

  /**
   * Changes the slider to be vertical or horizontal, default is horizontal
   *
   * @param vertical or horizontal
   * @returns {this} The object in use
   * @usage Creates a new slider and changes the bar type to horizontal
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local slider = mainFrame:addSlider():setBarType("vertical")
   * ```
   * ```xml
   * <slider barType="vertical" />
   * ```
   */
  setBarType(vertical: string): this;

  /**
   * Changes the current index to your choice, for example you could create a button which scrolls up to 1 by using :setIndex(1)
   *
   * @param the index
   * @returns {this} The object in use
   * @usage Creates a new slider and changes the index to 1 as soon as the button got clicked
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local slider = mainFrame:addSlider():setMaxValue(20)
   * local button = mainFrame:addButton(function()
   *     slider:setIndex(1)
   * end)
   * ```
   * ```xml
   * <slider index="2" />
   * ```
   */
  setIndex(the: number): this;

  /**
   * the default max value is always the width (if horizontal) or height (if vertical), if you change the max value the bar will always calculate the value based on its width or height - example: you set the max value to 100, the height is 10 and it is a vertical bar, this means if the bar is on top, the value is 10, if the bar goes one below, it is 20 and so on.
   *
   * @param maximum
   * @returns {this} The object in use
   * @usage Creates a new slider and changes the max value to 20
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local slider = mainFrame:addSlider():setMaxValue(20)
   * ```
   * ```xml
   * <slider maxValue="20" />
   * ```
   */
  setMaxValue(maximum: number): this;

  /**
   * Changes the slider symbol, default is " "
   *
   * @param symbol
   * @returns {this} The object in use
   * @usage Creates a new slider and changes the symbol to X
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local slider = mainFrame:addSlider():setSymbol("X")
   * ```
   * ```xml
   * <slider symbol="X" />
   * ```
   */
  setSymbol(symbol: string): this;
}
