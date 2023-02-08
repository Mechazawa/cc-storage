import { BObject } from "./BObject.d";

declare interface Menubar extends BObject {
  /**
   * Adds a item into the list
   *
   * @param The entry name
   * @param any value - you could access this later in a :onChange() event (you need to use :getValue()) - optional
   * @returns {this} The object in use
   * @usage Creates a default menubar with 3 entries
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *   :addItem("1. Entry")
   *   :addItem("2. Entry",colors.yellow)
   *   :addItem("3. Entry",colors.yellow,colors.green)
   * ```
   * ```xml
   * <menubar>
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text><bg>yellow</bg></item>
   *   <item><text>3. Entry</text><bg>yellow</bg><fg>green</fg></item>
   * </menubar>
   * ```
   */
  addItem(The: string, any: any): this;

  /**
   * Removes all items.
   *
   * @returns {this} The object in use
   * @usage Creates a default menubar with 3 entries and removes them immediatley. Which makes no sense.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *   :addItem("1. Entry")
   *   :addItem("2. Entry",colors.yellow)
   *   :addItem("3. Entry",colors.yellow,colors.green)
   * aMenubar:clear()
   * ```
   */
  clear(): this;

  /**
   * Edits a item from the menubar
   *
   * @param index The index which should be edited
   * @param name The new item name
   * @param background the new item background color - optional
   * @param textcolor The new item text color - optional
   * @param extra New additional information - optional
   * @returns {this} The object in use
   * @usage Creates a default menubar with 3 entries and edits the second one.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *   :addItem("1. Entry")
   *   :addItem("2. Entry",colors.yellow)
   *   :addItem("3. Entry",colors.yellow,colors.green)
   * aMenubar:editItem(2, "Still 2. Entry", colors.red)
   * ```
   */
  editItem(index: number, name: string, background?: number, textcolor?: number, extra?: any): this;

  /**
   * Returns all items as table
   *
   * @returns All items
   * @usage Creates a default menubar with 3 entries and prints a table.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aMenubar:getAll())
   * ```
   */
  getAll(): object[];

  /**
   * Returns a item by index
   *
   * @param index The index which should be returned
   * @returns The item table example: {text="1. Entry", bgCol=colors.black, fgCol=colors.white}
   * @usage Creates a default menubar with 3 entries and edits the second one.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMeubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aMenubar:getItem(2).text)
   * ```
   */
  getItem(index: number): object | LuaMap<string, any>;

  /**
   * Returns the current item count
   *
   * @returns {number} The item list count
   * @usage Creates a default menubar with 3 entries and prints the current item count.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aMenubar:getItemCount())
   * ```
   */
  getItemCount(): number;

  /**
   * returns the item index of the currently selected item
   *
   * @returns {number} The current index
   * @usage Creates a default menubar with 3 entries selects the second entry and prints the currently selected index.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   *     :selectItem(2)
   * basalt.debug(aMenubar:getItemIndex())
   * ```
   */
  getItemIndex(): number;

  /**
   * Returns the current index offset
   *
   * @returns {number} offset value
   * @usage Creates a default menubar with 6 entries and sets the offset to 3, also prints the current offset.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *       :addItem("1. Entry")
   *       :addItem("2. Entry")
   *       :addItem("3. Entry")
   *       :addItem("4. Entry")
   *       :addItem("5. Entry")
   *       :addItem("6. Entry")
   *       :addItem("7. Entry")
   *       :addItem("8. Entry")
   *       :setOffset(3)
   * basalt.debug(aMenubar:getOffset())
   * ```
   */
  getOffset(): number;

  /**
   * Removes a item from the menubar
   *
   * @param index The index which should get removed
   * @returns {this} The object in use
   * @usage Creates a default menubar with 3 entries and removes the second one.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   *     :removeItem(2)
   * ```
   */
  removeItem(index: number): this;

  /**
   * selects a item in the menubar (same as a player would click on a item)
   *
   * @param index The index which should get selected
   * @returns {this} The object in use
   * @usage Creates a default menubar with 3 entries and selects the second entry.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *     :addItem("1. Entry")
   *     :addItem("2. Entry",colors.yellow)
   *     :addItem("3. Entry",colors.yellow,colors.green)
   *     :selectItem(2)
   * ```
   */
  selectItem(index: number): this;

  /**
   * Sets the offset of the menubar (the same as you would scroll) - default is 0
   *
   * @param offset The offset value
   * @returns {this} The object in use
   * @usage Creates a default menubar with 6 entries and sets the offset to 3.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *       :addItem("1. Entry")
   *       :addItem("2. Entry")
   *       :addItem("3. Entry")
   *       :addItem("4. Entry")
   *       :addItem("5. Entry")
   *       :addItem("6. Entry")
   *       :setOffset(3)
   * ```
   * ```xml
   * <menubar offset="3">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text></item>
   *   <item><text>3. Entry</text></item>
   *   <item><text>4. Entry</text></item>
   *   <item><text>5. Entry</text></item>
   *   <item><text>6. Entry</text></item>
   * </menubar>
   * ```
   */
  setOffset(offset: number): this;

  /**
   * Makes it possible to scroll while the mouse is over the menubar
   *
   * @param scrollable If the menubar should be scrollable or not
   * @returns {this} The object in use
   * @usage Creates a new menubar and makes it scrollable
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar():setScrollable(true)
   *   :addItem("1. Entry")
   *   :addItem("2. Entry")
   *   :addItem("3. Entry")
   *   :addItem("4. Entry")
   *   :addItem("5. Entry")
   *   :addItem("6. Entry")
   *   :addItem("7. Entry")
   *   :addItem("8. Entry")
   *   :addItem("9. Entry")
   *
   * ```
   * ```xml
   * <menubar scrollable="true">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text></item>
   *   <item><text>3. Entry</text></item>
   *   <item><text>4. Entry</text></item>
   *   <item><text>5. Entry</text></item>
   *   <item><text>6. Entry</text></item>
   *   <item><text>7. Entry</text></item>
   *   <item><text>8. Entry</text></item>
   *   <item><text>9. Entry</text></item>
   * </menubar>
   * ```
   */
  setScrollable(scrollable?: boolean): this;

  /**
   * Sets the background and the foreground of the item which is currently selected
   *
   * @returns {this} The object in use
   * @usage Creates a default menubar with 4 entries and sets the selection background color to green.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *   :addItem("1. Entry")
   *   :addItem("2. Entry",colors.yellow)
   *   :addItem("3. Entry",colors.yellow,colors.green)
   *   :addItem("4. Entry")
   *   :setSelectedItem(colors.green, colors.red)
   * ```
   * ```xml
   * <menubar selectionBG="green" selectionFG="red">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text><bg>yellow</bg></item>
   *   <item><text>2. Entry</text><bg>yellow</bg><fg>green</fg></item>
   * </menubar>
   * ```
   */
  setSelectedItem(): this;

  /**
   * Sets the background and the foreground of the item which is currently selected
   *
   * @param value The space you want between the entries
   * @returns {this} The object in use
   * @usage Creates a default menubar with 4 entries and sets the space to 3.
   * ```lua
   * local main = basalt.createFrame()
   * local aMenubar = main:addMenubar()
   *   :addItem("1. Entry")
   *   :addItem("2. Entry",colors.yellow)
   *   :addItem("3. Entry",colors.yellow,colors.green)
   *   :addItem("4. Entry")
   *   :setSpace(3)
   * ```
   * ```xml
   * <menubar selectionBG="green" selectionFG="red" space="3">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text><bg>yellow</bg></item>
   *   <item><text>2. Entry</text><bg>yellow</bg><fg>green</fg></item>
   * </menubar>
   * ```
   */
  setSpace(value: number): this;
}
