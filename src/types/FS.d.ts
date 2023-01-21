/** @noSelf */
declare interface FS {
  // Provides completion for a file or directory name, suitable for use with _G.read.
  complete(
    path: string,
    location: string,
    include_files?: boolean | { include_dirs?: boolean; include_files?: boolean; include_hidden?: boolean },
    include_dirs?: boolean
  ): string[];
  // Returns true if a path is mounted to the parent filesystem.
  isDriveRoot(path: string): boolean;
  // Returns a list of files in a directory.
  list(path: string): string[];
  // Combines several parts of a path into one full path adding separators as needed.
  combine(path: string, ...paths: string[]): string;
  // Returns the file name portion of a path.
  getName(path: string): string;
  // Returns the parent directory portion of a path.
  getDir(path: string): string;
  // Returns the size of the specified file.
  getSize(path: string): number;
  // Returns whether the specified path exists.
  exists(path: string): boolean;
  // Returns whether the specified path is a directory.
  isDir(path: string): boolean;
  // Returns whether a path is read-only.
  isReadOnly(path: string): boolean;
  // Creates a directory, and any missing parents, at the specified path.
  makeDir(path: string): void;
  // Moves a file or directory from one path to another.
  move(path: string, dest: string): void;
  // Copies a file or directory to a new path.
  copy(path: string, dest: string): void;
  // Deletes a file or directory.
  delete(path: string): void;
  // Opens a file for reading or writing at a path.
  open(path: string, mode: string): WriteHandle | BinaryWriteHandle | ReadHandle | BinaryReadHandle; // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Returns the name of the mount that the specified path is located on.
  getDrive(path: string): string | undefined;
  // Returns the amount of free space available on the drive the path is located on.
  getFreeSpace(path: string): number | "unlimited";
  // Searches for files matching a string with wildcards.
  find(path: string): string[];
  // Returns the capacity of the drive the path is located on.
  getCapacity(path: string): number | undefined;
  // Get attributes about a specific file or folder.
  attributes(path: string): { size: number; isDir: boolean; isReadOnly: boolean; created: number; modified: number };
}
