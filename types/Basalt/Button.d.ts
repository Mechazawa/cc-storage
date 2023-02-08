import { BObject } from "./BObject.d";

declare interface Button extends BObject {
  /**
   * Sets the horizontal align of the button text
   *
   * @param position the position as string ("left", "center", "right") - default is center.
   * @returns {this} The object in use
   * @usage Sets the button's horizontal text align to right.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local button = mainFrame:addButton()
   *        :setText("Click me!")
   *        :setHorizontalAlign("right")
   * ```
   * ```xml
   * <button text="Click me!" horizontalAlign="right" />
   * ```
   */
  setHorizontalAlign(position: string): this;

  /**
 * Sets the displayed button text
 *
 * @param text text the button should show
 * @returns {this} The object in use
 * @usage Creates a button with "Click me!" as text.
 * ```lua
 * local mainFrame = basalt.createFrame()
 * local button = mainFrame:addButton():setText("Click me!")
 * ```
 * ```xml
 * <button text="Click me!" />
 * ```
 */
  setText(text: string): this;

  /**
   * Sets the vertical align of the button text
   *
   * @param position the position as string ("top", "center", "bottom") - default is center.
   * @returns {this} The object in use
   * @usage Sets the button's horizontal text align to right and the vertical text align to bottom.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local button = mainFrame:addButton()
   *        :setText("Click me!")
   *        :setHorizontalAlign("right")
   *        :setVerticalAlign("bottom")
   * ```
   * ```xml
   * <button text="Click me!" horizontalAlign="right" verticalAlign="bottom" />
   * ```
   */
  setVerticalAlign(position: string): this;
}
