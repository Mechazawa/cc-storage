import { BObject } from "./BObject.d";

declare interface Progressbar extends BObject {
  /**
   * Returns the current progress status
   *
   * @returns {number} progress (0-100)
   * @usage Creates a progressbar, sets the current progress to 50 and prints the current progress
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgressbar = mainFrame:addProgressbar()
   * aProgressbar:setProgress(50)
   * basalt.debug(aProgressbar:getProgress())
   * ```
   */
  getProgress(): number;

  /**
   * unknown
   *
   */
  unknown(): void;

  /**
   * This will change the background symbol (default is " " - space)
   *
   * @param char the background symbol
   * @returns {this} The object in use
   * @usage Creates a progressbar and sets the progressbar background symbol to X
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgressbar = mainFrame:addProgressbar()
   * aProgressbar:setBackgroundSymbol("X")
   * ```
   * ```xml
   * <progressbar backgroundSymbol="X" />
   * ```
   */
  setBackgroundSymbol(char: string): this;

  /**
   * Sets the direction in which the bar should be expanding.
   *
   * @param x direction (0 = left to right, 1 = top to bottom, 2 = right to left and 3 = bottom to top)
   * @returns {this} The object in use
   * @usage Creates a progressbar and sets the direction from bottom to top
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgressbar = mainFrame:addProgressbar()
   * aProgressbar:setDirection(3)
   * ```
   * ```xml
   * <frame direction="3"></frame>
   * ```
   */
  setDirection(x: number): this;

  /**
   * This is the function you need to call if you want the progression to change.
   *
   * @param a number from 0 to 100
   * @returns {this} The object in use
   * @usage Creates a progressbar and sets the current progress to 50
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgressbar = mainFrame:addProgressbar()
   * aProgressbar:setProgress(50)
   * ```
   */
  setProgress(a: number): this;

  /**
   * This function will change the visual display of your progress bar
   *
   * @param optional the bar symbol - default is " " (space)
   * @returns {this} The object in use
   * @usage Creates a progressbar and sets the progressbar color to green
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aProgressbar = mainFrame:addProgressbar()
   * aProgressbar:setProgressBar(colors.green, colors.yellow, colors.red)
   * ```
   * ```xml
   * <progressbar progressColor="green" progressSymbol="yellow" progressSymbolColor="red" />
   * ```
   */
  setProgressBar(optional?: string): this;
}
