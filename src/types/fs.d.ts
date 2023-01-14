/** @noSelf */
declare module "fs" {
  // Provides completion for a file or directory name, suitable for use with _G.read.
  export function complete(path: string, location: string, include_files?: boolean|{include_dirs?: boolean, include_files?: boolean, include_hidden?: boolean}, include_dirs?: boolean): string[];
  // Returns true if a path is mounted to the parent filesystem.
  export function isDriveRoot(path: string): boolean;
  // Returns a list of files in a directory.
  export function list(path: string): string[];
  // Combines several parts of a path into one full path adding separators as needed.
  export function combine(path: string, ...paths: string[]): string;
  // Returns the file name portion of a path.
  export function getName(path: string): string;
  // Returns the parent directory portion of a path.
  export function getDir(path: string): string;
  // Returns the size of the specified file.
  export function getSize(path: string): number;
  // Returns whether the specified path exists.
  export function exists(path: string): boolean;
  // Returns whether the specified path is a directory.
  export function isDir(path: string): boolean;
  // Returns whether a path is read-only.
  export function isReadOnly(path: string): boolean;
  // Creates a directory, and any missing parents, at the specified path.
  export function makeDir(path: string): void;
  // Moves a file or directory from one path to another.
  export function move(path: string, dest: string): void;
  // Copies a file or directory to a new path.
  export function copy(path: string, dest: string): void;
  // Deletes a file or directory.
  //export function delete(path: string): void;
  // Opens a file for reading or writing at a path.
  export function open(path: string, mode: string): any; // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Returns the name of the mount that the specified path is located on.
  export function getDrive(path: string): string|undefined;
  // Returns the amount of free space available on the drive the path is located on.
  export function getFreeSpace(path: string): number|"unlimited";
  // Searches for files matching a string with wildcards.
  export function find(path: string): string[];
  // Returns the capacity of the drive the path is located on.
  export function getCapacity(path: string): number|undefined;
  // Get attributes about a specific file or folder.
  export function attributes(path: string): { size: number, isDir: boolean, isReadOnly: boolean, created: number, modified: number };
}