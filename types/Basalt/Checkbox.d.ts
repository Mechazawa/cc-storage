import "./BObject.d";

declare interface Checkbox extends BObject {
  /**
   * Changes the checkbox symbol, default is "\42"
   *
   * @param symbol
   * @returns {this} The object in use
   * @usage Creates a new checkbox and changes the symbol to o
   * ```lua
   * local main = basalt.createFrame()
   * local checkbox = main:addCheckbox():setSymbol("o")
   * ```
   * ```xml
   * <checkbox symbol="o" />
   * ```
   */
  setSymbol(symbol: string): this;
}
