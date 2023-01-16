/** @noSelf */
declare interface Term {
  /**
   * Get the default palette value for a colour.
   */
  nativePaletteColour(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Get the default palette value for a colour.
   */
  nativePaletteColor(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Write text at the current cursor position, moving the cursor to the end of the text.
   */
  write(text: string): void;
  /**
   * Move all positions up (or down) by y pixels.
   */
  scroll(y: number): void;
  /**
   * Get the position of the cursor.
   */
  getCursorPos(): LuaMultiReturn<[number, number]>;
  /**
   * Set the position of the cursor.
   */
  setCursorPos(x: number, y: number): void;
  /**
   * Checks if the cursor is currently blinking.
   */
  getCursorBlink(): boolean;
  /**
   * Sets whether the cursor should be visible (and blinking) at the current cursor position.
   */
  setCursorBlink(blink: boolean): void;
  /**
   * Get the size of the terminal.
   */
  getSize(): LuaMultiReturn<[number, number]>;
  /**
   * Clears the terminal, filling it with the current background colour.
   */
  clear(): void;
  /**
   * Clears the line the cursor is currently on, filling it with the current background colour.
   */
  clearLine(): void;
  /**
   * Return the colour that new text will be written as.
   */
  getTextColour(): number;
  /**
   * Return the colour that new text will be written as.
   */
  getTextColor(): number;
  /**
   * Set the colour that new text will be written as.
   */
  setTextColour(colour: number): void;
  /**
   * Set the colour that new text will be written as.
   */
  setTextColor(colour: number): void;
  /**
   * Return the current background colour.
   */
  getBackgroundColour(): number;
  /**
   * Return the current background colour.
   */
  getBackgroundColor(): number;
  /**
   * Set the current background colour.
   */
  setBackgroundColour(colour: number): void;
  /**
   * Set the current background colour.
   */
  setBackgroundColor(colour: number): void;
  /**
   * Determine if this terminal supports colour.
   */
  isColour(): boolean;
  /**
   * Determine if this terminal supports colour.
   */
  isColor(): boolean;
  /**
   * Writes text to the terminal with the specific foreground and background characters.
   */
  blit(text: string, textColour: number, backgroundColour: number): void;
  /**
   * Set the palette for a specific colour.
   */
  setPaletteColour(...colors: number[]): void;
  /**
   * Set the palette for a specific colour.
   */
  setPaletteColor(...colors: number[]): void;
  /**
   * Get the current palette for a specific colour.
   */
  getPaletteColour(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Get the current palette for a specific colour.
   */
  getPaletteColor(colour: number): LuaMultiReturn<[number, number, number]>;
  /**
   * Redirects terminal output to a monitor, a window, or any other custom terminal object.
   */
  redirect(target: any): any;
  /**
   * Returns the current terminal object of the computer.
   */
  current(): any;
  /**
   * Get the native terminal object of the current computer.
   */
  native(): any;
}
