import { BObject } from "./BObject.d";

declare interface Dropdown extends BObject {
  /**
   * Adds a item into the dropdown
   *
   * @param name The entry name
   * @param value - you could access this later in a :onChange() event (you need to use :getValue()) - optional
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 3 entries
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * ```
   * ```xml
   * <dropdown>
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text><bg>yellow</bg></item>
   *   <item><text>3. Entry</text><bg>yellow</bg><fg>green</fg></item>
   * </dropdown>
   * ```
   */
  addItem(name: string, value: any): this;

  /**
   * Removes all items.
   *
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 3 entries and removes them immediatley. Which makes no sense.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:clear()
   * ```
   */
  clear(): this;

  /**
   * Edits a item from the dropdown
   *
   * @param index The index which should be edited
   * @param name The new item name
   * @param background the new item background color - optional
   * @param textcolor new item text color - optional
   * @param extra New additional information - optional
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 3 entries and edits the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:editItem(2, "Still 2. Entry", colors.red)
   * ```
   */
  editItem(index: number, name: string, background?: number, textcolor?: number, extra?: any): this;

  /**
   * Returns all items as table
   *
   * @returns {object} All items
   * @usage Creates a default menubar with 3 entries and prints a table.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aDropdown:getAll())
   * ```
   */
  getAll(): object;

  /**
   * Returns a item by index
   *
   * @param index The index which should be returned
   * @returns {any} The item table example: {text="1. Entry", bgCol=colors.black, fgCol=colors.white}
   * @usage Creates a default dropdown with 3 entries and edits the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aDropdown:getItem(2).text)
   * ```
   */
  getItem(index: number): any;

  /**
   * Returns the current item count
   *
   * @returns {number} The item list count
   * @usage Creates a default dropdown with 3 entries and prints the current item count.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * basalt.debug(aDropdown:getItemCount())
   * ```
   */
  getItemCount(): number;

  /**
   * returns the item index of the currently selected item
   *
   * @returns {number} The current index
   * @usage Creates a default dropdown with 3 entries selects the second entry and prints the currently selected index.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:selectItem(2)
   * basalt.debug(aDropdown:getItemIndex())
   * ```
   */
  getItemIndex(): number;

  /**
   * Returns the current index offset
   *
   * @returns {number} offset value
   * @usage Creates a default dropdown with 6 entries and sets the offset to 3, also prints the current offset.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   *       :addItem("1. Entry")
   *       :addItem("2. Entry")
   *       :addItem("3. Entry")
   *       :addItem("4. Entry")
   *       :addItem("5. Entry")
   *       :addItem("6. Entry")
   *       :setOffset(3)
   * basalt.debug(aDropdown:getOffset())
   * ```
   */
  getOffset(): number;

  /**
   * Removes a item from the dropdown
   *
   * @param index The index which should get removed
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 3 entries and removes the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:removeItem(2)
   * ```
   */
  removeItem(index: number): this;

  /**
   * selects a item in the dropdown (same as a player would click on a item)
   *
   * @param index The index which should get selected
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 3 entries and selects the second entry.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:selectItem(2)
   * ```
   */
  selectItem(index: number): this;

  /**
   * Sets the size of the opened dropdown
   *
   * @param width The width value
   * @param height The height value
   * @returns {this} The object in use
   * @usage Creates a default dropdown, adds 3 entries and sets the dropdown size to 15w, 8h
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown():setDropdownSize(15,8)
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry")
   * aDropdown:addItem("3. Entry")
   * ```
   * ```xml
   * <dropdown dropdownWidth="15" dropdownHeight="8">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text></item>
   *   <item><text>3. Entry</text></item>
   * </dropdown>
   * ```
   */
  setDropdownSize(width: number, height: number): this;

  /**
   * Sets the offset of the dropdown (the same as you would scroll) - default is 0
   *
   * @param offset The offset value
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 6 entries and sets the offset to 3.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   *       :addItem("1. Entry")
   *       :addItem("2. Entry")
   *       :addItem("3. Entry")
   *       :addItem("4. Entry")
   *       :addItem("5. Entry")
   *       :addItem("6. Entry")
   *       :setOffset(3)
   * ```
   * ```xml
   * <dropdown offset="3">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text></item>
   *   <item><text>3. Entry</text></item>
   *   <item><text>4. Entry</text></item>
   *   <item><text>5. Entry</text></item>
   *   <item><text>6. Entry</text></item>
   * </dropdown>
   * ```
   */
  setOffset(offset: number): this;

  /**
   * Sets the background and the foreground of the item which is currently selected
   *
   * @returns {this} The object in use
   * @usage Creates a default dropdown with 4 entries and sets the selection background color to green.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aDropdown = mainFrame:addDropdown()
   * aDropdown:addItem("1. Entry")
   * aDropdown:addItem("2. Entry",colors.yellow)
   * aDropdown:addItem("3. Entry",colors.yellow,colors.green)
   * aDropdown:addItem("4. Entry")
   * aDropdown:setSelectedItem(colors.green, colors.red)
   * ```
   * ```xml
   * <dropdown selectionBG="green" selectionFG="red">
   *   <item><text>1. Entry</text></item>
   *   <item><text>2. Entry</text><bg>yellow</bg></item>
   *   <item><text>2. Entry</text><bg>yellow</bg><fg>green</fg></item>
   * </dropdown>
   * ```
   */
  setSelectedItem(bg: number, fg: number): this;
}
