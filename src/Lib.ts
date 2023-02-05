import Hash from "./Hash";

/** @noSelf */
declare namespace http {
  export function get(url: any): BinaryReadHandle | ReadHandle;
}

export default class Lib {
  static basePath = "/lib";
  static store = new LuaMap<string, string>();

  static requireRemote<T>(url: string, force = false): T {
    if (!force && Lib.store.has(url)) {
      const path = Lib.store.get(url) as string;
      const [fn] = loadfile(path + ".lua");

      if (!fn) {
        throw new Error("Invalid lib " + path + " for " + url);
      }

      return fn();
    }

    this.fetch(url, force);

    return this.requireRemote<T>(url);
  }

  static fetch(url: string, force = false): void {
    if (!force && Lib.store.has(url)) {
      return;
    }

    const fileName = this.basePath + Hash.fnv32b(url);

    if (!force && fs.exists(fileName + ".lua")) {
      Lib.store.set(url, fileName);
      return;
    }

    const response = http.get({ url, binary: true, redirect: true }) as BinaryReadHandle;
    const file = fs.open(fileName + ".lua", "wb") as BinaryWriteHandle;

    file.write(response.readAll() ?? "");

    response.close();
    file.flush();
    file.close();

    this.store.set(url, fileName);
  }
}
