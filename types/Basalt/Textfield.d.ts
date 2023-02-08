import { BObject } from "./BObject.d";

declare interface Textfield extends BObject {
  /**
   * Adds keywords for special coloring
   *
   * @param keys list of keywords which should be colored example: {"if", "else", "then", "while", "do"}
   * @returns {this} The object in use
   * @usage Changes the color of some words to purple
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aTextfield = mainFrame:addTextfield():addKeywords(colors.purple, {"if", "else", "then", "while", "do", "hello"})
   * ```
   * ```xml
   * <textfield>
   *     <keywords>
   *         <purple>
   *             <keyword>if</keyword>
   *             <keyword>else</keyword>
   *             <keyword>then</keyword>
   *             <keyword>while</keyword>
   *             <keyword>do</keyword>
   *             <keyword>hello</keyword>
   *         </purple>
   *     </keywords>
   * </textfield>
   * ```
   */
  addKeywords(keys: string[]): this;

  /**
   * Adds a line on index position
   *
   * @param text
   * @param index
   * @returns {this} The object in use
   * @usage Adds a line
   * ```lua
   * local mainFrame = basalt.createFrame("myFirstFrame"):show()
   * local aTextfield = mainFrame:addTextfield("myFirstTextfield"):show()
   * basalt.debug(aTextfield:addLine("Hello!", 1))
   * ```
   * ```xml
   * <textfield>
   *     <lines>
   *         <line>Hello!</line>
   *     </lines>
   * </textfield>
   * ```
   */
  addLine(text: string, index: number): this;

  /**
   * Adds a new rule for special coloring
   *
   * @param a pattern - check out this page: (https://riptutorial.com/lua/example/20315/lua-pattern-matching)
   * @returns {this} The object in use
   * @usage Changes the color of all numbers
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aTextfield = mainFrame:addTextfield():addRule("%d", colors.lightBlue)
   * ```
   * ```xml
   * <textfield>
   *     <rules>
   *         <rule>
   *             <pattern>%d</pattern>
   *             <fg>lightBlue</fg>
   *         </rule>
   *     </rules>
   * </textfield>
   * ```
   */
  addRule(a: string): this;

  /**
   * Edits the line on index position
   *
   * @param index
   * @param text
   * @returns {this} The object in use
   * @usage Edits the line
   * ```lua
   * local mainFrame = basalt.createFrame("myFirstFrame"):show()
   * local aTextfield = mainFrame:addTextfield("myFirstTextfield"):show()
   * basalt.debug(aTextfield:editLine(1, "Hello!"))
   * ```
   */
  editLine(index: number, text: string): this;

  /**
   * Returns the line on index position
   *
   * @param index
   * @returns {string} line
   * @usage Prints one line
   * ```lua
   * local mainFrame = basalt.createFrame("myFirstFrame"):show()
   * local aTextfield = mainFrame:addTextfield("myFirstTextfield"):show()
   * basalt.debug(aTextfield:getLine(1))
   * ```
   */
  getLine(index: number): string;

  /**
   * Returns all lines
   *
   * @returns lines
   * @usage Prints all lines
   * ```lua
   * local mainFrame = basalt.createFrame("myFirstFrame"):show()
   * local aTextfield = mainFrame:addTextfield("myFirstTextfield"):show()
   * basalt.debug(aTextfield:getLines())
   * ```
   */
  getLines(): string[];

  /**
   * Gets text cursor position
   *
   * @returns {number} x position
   * @returns {number} y position
   */
  getTextCursor(): number | number;

  /**
   * Removes the line on index position
   *
   * @param index
   * @param text
   * @returns {this} The object in use
   * @usage Removes a line
   * ```lua
   * local mainFrame = basalt.createFrame("myFirstFrame"):show()
   * local aTextfield = mainFrame:addTextfield("myFirstTextfield"):show()
   * basalt.debug(aTextfield:removeLine())
   * ```
   */
  removeLine(index: number, text: string): this;
}
