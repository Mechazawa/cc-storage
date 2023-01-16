/** @noSelf */
declare interface ReadHandle extends HandleGeneric {
    read(count?: number): undefined|number|string;
    readAll(): string|undefined;
    readLine(withTrailing?: boolean): string|undefined;
}