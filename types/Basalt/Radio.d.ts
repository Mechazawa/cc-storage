import "./BObject.d";

declare interface Radio extends BObject {
  /**
   * Adds a item to the radio
   *
   * @param The entry name
   * @param x position
   * @param y position
   * @param any value - you could access this later in a :onChange() event (you need to use :getValue()) - optional
   * @returns {this} The object in use
   * @usage Creates a default radio with 3 entries
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * ```
   * ```xml
   * <radio>
   *   <item><text>1. Entry</text><x>5</x><y>2</y></item>
   *   <item><text>2. Entry</text><x>5</x><y>4</y><bg>yellow</bg></item>
   *   <item><text>3. Entry</text><x>5</x><y>6</y><bg>yellow</bg><fg>green</fg></item>
   * </radio>
   * ```
   */
  addItem(The: string, x: number, y: number, any: any): this;

  /**
   * Removes all items.
   *
   * @returns {this} The object in use
   * @usage Creates a default radio with 3 entries and removes them immediatley. Which makes no sense.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:clear()
   * ```
   */
  clear(): this;

  /**
   * Edits a item from the radio
   *
   * @param index The index which should be edited
   * @param name The new item name
   * @param x the new x position
   * @param y the new y position
   * @param extra New additional information - optional
   * @returns {this} The object in use
   * @usage Creates a default radio with 3 entries and changes the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:editItem(2, "Still 2. Entry", 5, 4, colors.red)
   * ```
   */
  editItem(index: number, name: string, x: number, y: number, extra?: any): this;

  /**
   * Returns all items as table
   *
   * @returns All items
   * @usage Creates a default menubar with 3 entries and prints a table.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * basalt.debug(aRadio:getAll())
   * ```
   */
  getAll(): any[];

  /**
   * Returns a item by index
   *
   * @param The index which should be returned
   * @returns {object} The item table example: {text="1. Entry", bgCol=colors.black, fgCol=colors.white}
   * @usage Creates a default radio with 3 entries and edits the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * basalt.debug(aRadio:getItem(2).text)
   * ```
   */
  getItem(The: number): object;

  /**
   * Returns the current item count
   *
   * @returns {number} The item radio count
   * @usage Creates a default radio with 3 entries and prints the current item count.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * basalt.debug(aRadio:getItemCount())
   * ```
   */
  getItemCount(): number;

  /**
   * returns the item index of the currently selected item
   *
   * @returns {number} The current index
   * @usage Creates a default radio with 3 entries selects the second entry and prints the currently selected index.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:selectItem(2)
   * basalt.debug(aRadio:getItemIndex())
   * ```
   */
  getItemIndex(): number;

  /**
   * Removes a item from the radio
   *
   * @param The index which should get removed
   * @returns {this} The object in use
   * @usage Creates a default radio with 3 entries and removes the second one.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:removeItem(2)
   * ```
   */
  removeItem(The: number): this;

  /**
   * selects a item in the radio (same as a player would click on a item)
   *
   * @param The index which should get selected
   * @returns {this} The object in use
   * @usage Creates a default radio with 3 entries and selects the second entry.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:selectItem(2)
   * ```
   */
  selectItem(The: number): this;

  /**
   * Sets the background and the foreground of the item which is currently selected
   *
   * @returns {this} The object in use
   * @usage Creates a default radio with 4 entries and sets the selection background color to green.
   * ```lua
   * local mainFrame = basalt.createFrame()
   * local aRadio = mainFrame:addRadio()
   * aRadio:addItem("1. Entry",5,2)
   * aRadio:addItem("2. Entry",5,4,colors.yellow)
   * aRadio:addItem("3. Entry",5,6,colors.yellow,colors.green)
   * aRadio:addItem("4. Entry",5,8)
   * aRadio:setSelectedItem(colors.green, colors.red)
   * ```
   * ```xml
   * <radio selectionBG="green" selectionFG="red">
   *   <item><text>1. Entry</text><x>5</x><y>2</y></item>
   *   <item><text>2. Entry</text><x>5</x><y>4</y><bg>yellow</bg></item>
   *   <item><text>3. Entry</text><x>5</x><y>6</y><bg>yellow</bg><fg>green</fg></item>
   * </radio>
   * ```
   */
  setSelectedItem(): this;
}
