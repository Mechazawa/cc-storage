import Hash from "./Hash";

/** @noSelf */
declare namespace http {
  export function get(url: any): BinaryReadHandle | ReadHandle;
}

interface StoredLib {
  url: string;
  fileName: string;
  data?: any;
}

export default class Lib {
  static basePath = "/lib/";
  static store = new LuaMap<string, StoredLib>();

  static requireRemote<T>(url: string, force = false): T {
    const record = this.store.get(url);

    if (!force && record) {
      if (record.data !== undefined) {
        return record.data;
      }

      const [fn] = loadfile(record.fileName);

      if (!fn) {
        throw new Error("Invalid lib " + record.fileName + " for " + url);
      }

      record.data = fn();

      // Probably not needed but I don't trust Lua enough
      this.store.set(url, record);

      return record.data;
    }

    this.fetch(url, force);

    return this.requireRemote<T>(url);
  }

  static fetch(url: string, force = false): void {
    if (!force && Lib.store.has(url)) {
      return;
    }

    const fileName = this.basePath + Hash.fnv32b(url) + ".lua";
    const record = { fileName, url };

    if (!force && fs.exists(fileName)) {
      this.store.set(url, record);
      return;
    }

    const response = http.get({ url, binary: true, redirect: true }) as BinaryReadHandle;
    const file = fs.open(fileName, "wb") as BinaryWriteHandle;

    file.write(response.readAll() ?? "");

    response.close();
    file.flush();
    file.close();

    this.store.set(url, record);
  }
}
