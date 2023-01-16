/** @noSelf */
declare interface ItemStack {
    count: number;
    displayName: string;
    maxCount: number;
    name: string;
    nbt: string;
    tags: LuaMap<string, boolean>;
}

declare interface TurtleItemStack {

}