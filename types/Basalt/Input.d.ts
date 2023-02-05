import "./BObject.d";

declare interface Input extends BObject {
  /**
   * Returns the input limit.
   *
   * @returns {number} character limit
   * @usage Creates a default input and sets the character limit to 8. Prints the current limit.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aInput = mainFrame:addInput():setInputLimit(8)
   * basalt.debug(aInput:getInputLimit())
   * ```
   */
  getInputLimit(): number;

  /**
   * Gets the current input type
   *
   * @returns {string} input type
   * @usage Creates a default input and sets it to numbers only. Also prints the current input type to log.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aInput = mainFrame:addInput():setInputType("number")
   * basalt.debug(aInput:getInputType())
   * ```
   */
  getInputType(): string;

  /**
   * Sets the default text. This will only be displayed if there is no input set by the user.
   *
   * @param input type ("text", "password", "number")
   * @returns {this} The object in use
   * @usage Creates a default input and sets the default text to "...".
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aInput = mainFrame:addInput():setDefaultText("...")
   * ```
   * ```xml
   * <input default="..." />
   * ```
   */
  setDefaultText(input: string): this;

  /**
   * Sets a character limit to the input.
   *
   * @param character limit
   * @returns {this} The object in use
   * @usage Creates a default input and sets the character limit to 8.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aInput = mainFrame:addInput():setInputLimit(8)
   * ```
   * ```xml
   * <input limit="8" />
   * ```
   */
  setInputLimit(character: number): this;

  /**
   * Changes the input type. default: text
   *
   * @param input type ("text", "password", "number")
   * @returns {this} The object in use
   * @usage Creates a default input and sets it to numbers only.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aInput = mainFrame:addInput():setInputType("number")
   * ```
   * ```xml
   * <input type="number" />
   * ```
   */
  setInputType(input: string): this;
}
