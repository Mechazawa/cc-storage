/** @noSelf */
declare interface HandleGeneric {
    /**
     * Close this file, freeing any resources it uses.
     * Once a file is closed it may no longer be read or written to.
     * @throws If the file has already been closed
     */
    close(): void;
}