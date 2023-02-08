import { BObject } from "./BObject.d";

declare interface Label extends BObject {
  /**
   * Returns the current font size
   *
   * @returns {number} font size
   * @usage Creates a default label, sets the text to "Basalt!" and its font size to 2. Also prints the current fontsize.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aLabel = mainFrame:addLabel():setText("Basalt!"):setFontSize(2)
   * basalt.debug(aLabel:getFontSize())
   * ```
   */
  getFontSize(): number;

  /**
   * Sets the font size, calculated by bigfonts. Default size is 1.
   *
   * @param The size (1, 2, 3, 4)
   * @returns {this} The object in use
   * @usage Creates a default label, sets the text to "Basalt!" and its font size to 2.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aLabel = mainFrame:addLabel():setText("Basalt!"):setFontSize(2)
   * ```
   * ```xml
   * <label font="2" />
   * ```
   */
  setFontSize(The: number): this;

  /**
   * Sets the text which gets displayed.
   *
   * @param The text which should be displayed
   * @returns {this} The object in use
   * @usage Creates a default label with text "Some random text".
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aLabel = mainFrame:addLabel():setText("Some random text")
   * ```
   * ```xml
   * <label text="Some random text" />
   * ```
   */
  setText(The: string): this;
}
