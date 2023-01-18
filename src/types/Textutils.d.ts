/** @noSelf */
declare interface Textutils {
  /**	A table representing an empty JSON array, in order to distinguish it from an empty JSON object. */
  readonly empty_json_array: object;

  /** A table representing the JSON null value. */
  readonly json_null: object;

  /** Slowly writes string text at current cursor position, character-by-character. */
  slowWrite(text: string, rate?: number): void;
  /** Slowly prints string text at current cursor position, character-by-character. */
  slowWrite(sText: string, nRate?: number): void;
  /** Takes input time and formats it in a more readable format such as 6:30 PM. */
  formatTime(nTime: number, bTwentyFourHour?: boolean): string;
  /** Prints a given string to the display. */
  pagedPrint(text: string, free_lines?: number): number;
  /** Prints tables in a structured form. */
  tabulate(...data: (number | string[])[]): void;
  /** Prints tables in a structured form, stopping and prompting for input should the result not fit on the terminal. */
  pagedTabulate(...data: (number | string[])[]): void;
  /** Convert a Lua object into a textual representation, suitable for saving in a file or pretty-printing. */
  serialize(
    t: object | LuaMap,
    opts?: { compact?: boolean; allow_repetitions?: boolean }
  ): string;
  /** Converts a serialised string back into a reassembled Lua object. */
  unserialise(s: string): undefined | object | LuaMap;
  /** Returns a JSON representation of the given data. */
  serializeJSON(t: object | LuaMap, bNBTStyle?: boolean): string;
  /** Converts a serialised JSON string back into a reassembled Lua object. */
  unserializeJSON(
    s: string,
    options?: {
      nbt_style?: boolean;
      parse_null?: boolean;
      parse_empty_array?: boolean;
    }
  ): object | LuaMap | LuaMultiReturn<[undefined, string]>;
  /** Replaces certain characters in a string to make it safe for use in URLs or POST data. */
  urlEncode(str: string): string;
  /** Provides a list of possible completions for a partial Lua expression. */
  complete(sSearchText: string, tSearchTable?: string[] | LuaMap): string[];
}
