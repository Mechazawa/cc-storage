import Cache from "../../Cache";
import Logger from "../../Logger";
import { ServerRPC } from "../Server.d";

type TextCompleter = (partial: string) => string[];

interface Command {
  keywords: string[];
  completeFn: TextCompleter;
  action: (...args: string[]) => any;
}

export class CommandLine {
  server: ServerRPC;
  storageName: string;
  history: string[] = [];
  cache = new Cache();

  prefixMap = [
    ["minecraft", "mc"],
    ["chipped", "ch"],
    ["computercraft", "cc"],
    ["create", "cr"],
    ["farmersdelight", "fd"],
    ["betteranimalsplus", "ap"],
    ["mcwbridges", "mcwb"],
    ["mcwfences", "mcwf"],
    ["mcwdoors", "mcwd"],
    ["mcwpaths", "mcwp"],
    ["mcwroofs", "mcwr"],
    ["mcwwindows", "mcww"],
  ];

  constructor(server: ServerRPC, storageName: string) {
    this.server = server;
    this.storageName = storageName;
  }

  completeFn(partial: string = ""): string[] {
    if (partial === "") {
      return [];
    } else if (partial.includes(" ")) {
      const [keyword, ...args] = partial.split(" ");
      const command = this.getCommands().find((c) => c.keywords.includes(keyword));
      const completions = command?.completeFn(args.join(" ")) ?? [];

      return completions.map((s) => s.substring(partial.length - keyword.length - 1));
    } else {
      return this.getCommands()
        .flatMap((c) => c.keywords)
        .filter((s) => s.startsWith(partial))
        .map((s) => s.substring(partial.length));
    }
  }

  _shortenPrefix(str: string): string {
    for (const [long, short] of this.prefixMap) {
      str = str.replace(long + ":", short + ":");
    }

    return str;
  }

  _expandPrefix(str: string): string {
    for (const [long, short] of this.prefixMap) {
      let old = str;
      str = str.replace(short + ":", long + ":");

      if (str !== old) {
        return str;
      }
    }

    return str;
  }

  exec(commandLine: string = ""): string {
    this.history.push(commandLine);

    const [keyword, ...args] = commandLine.split(" ");
    const command = this.getCommands().find((c) => c.keywords.includes(keyword));

    if (command === undefined) {
      return `Unknown command "${keyword}"`;
    }

    return command?.action(...args);
  }

  getCommands(): Command[] {
    return [
      {
        keywords: [""],
        completeFn: (partial: string) => [],
        action: () => undefined,
      },
      {
        keywords: ["clear", "cls"],
        completeFn: (partial: string) => [],
        action: () => {
          term.clear();
          term.setCursorPos(1, 1);
        },
      },
      {
        keywords: ["help", "?"],
        completeFn: (partial: string) => [],
        action: () => {
          const commands = this.getCommands()
            .map((x) => x.keywords)
            .map(([a, ...b]) => (b.length > 0 ? `${a} (${b.join(", ")})` : a))
            .filter((row) => row.length > 0)
            .map((row) => ` - ${row}`)
            .join("\n");

          return `Available commands:\n${commands}`;
        },
      },
      {
        keywords: ["defrag"],
        completeFn: (partial: string) => [],
        action: () => {
          return `freed ${this.server.defragment()} slots`;
        },
      },
      {
        keywords: ["flush"],
        completeFn: (partial: string) => [],
        action: () => {
          return this.server.flushCache() ? "Flushed cache" : "Failed to flush cache";
        },
      },
      {
        keywords: ["status"],
        completeFn: (partial: string) => [],
        action: () => {
          let used, size, types, count, cacheSize;

          parallel.waitForAll(
            () => (used = this.server.used()),
            () => (size = this.server.size()),
            () => (types = this.server.list().length),
            () => (count = this.server.count()),
            () => (cacheSize = this.server.cacheSize())
          );

          return `
Storage usage: ${used}/${size}
${types} item types
Total ${count} items
Cache contains ${cacheSize} records
          `.trim();
        },
      },
      {
        keywords: ["list", "l"],
        completeFn: (partial: string) => {
          partial = partial.toLowerCase();

          return this.cache
            .remember("list", () => this.server.list())
            .flatMap((resource) => [resource.name, resource.displayName, this._shortenPrefix(resource.name)])
            .filter((name) => name.toLowerCase().startsWith(partial));
        },
        action: (...parts: string[]) => {
          const name = parts.join(" ").toLowerCase();

          const rows = this.cache
            .remember("list", () => this.server.list())
            .filter(
              (resource) =>
                resource.name.startsWith(name ?? "") ||
                resource.displayName.toLowerCase().startsWith(name ?? "") ||
                this._shortenPrefix(resource.name).startsWith(name ?? "")
            )
            .sort((a, b) => b.count - a.count)
            .map((r) => [r.count, this._shortenPrefix(r.name), r.displayName].map((v) => `${v}`));

          new Logger().tabulate(8, colors.lightBlue, ["Count", "Name", "Display Name"], colors.lightGray, ...rows);
        },
      },
      {
        keywords: ["listCraftable", "lc"],
        completeFn: (partial: string = "") => {
          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .flatMap((recipe) => [this._shortenPrefix(recipe.name), recipe.name])
            .filter((name) => name.startsWith(partial));
        },
        action: (...parts: string[]) => {
          const name = parts.join(" ");

          const rows = this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .filter((recipe) => recipe.name.startsWith(this._expandPrefix(name ?? "")))
            .sort((a, b) => b.count - a.count)
            .map((r) => [this._shortenPrefix(r.name), r.count].map((v) => `${v}`));

          new Logger().tabulate(8, colors.lightBlue, ["Name", "Count"], colors.lightGray, ...rows);
        },
      },
      {
        keywords: ["store", "s"],
        completeFn: () => [],
        action: () => {
          return `stored ${this.server.storeAll(this.storageName)} items`;
        },
      },
      {
        keywords: ["take", "t"],
        completeFn: (partial: string = "") => {
          partial = partial.toLowerCase();

          return this.cache
            .remember("list", () => this.server.list())
            .flatMap((resource) => [this._shortenPrefix(resource.name), resource.name, resource.displayName])
            .filter((name) => name.toLowerCase().startsWith(partial));
        },
        action: (...parts: string[]) => {
          const countStr = parts.pop();
          const name = parts.join(" ");

          if (name === "") {
            return `Usage: take [item] [count=1]`;
          }

          let key: string = name;

          if (!name.includes(":")) {
            const resource = this.cache
              .remember("list", () => this.server.list())
              .find((resource) => resource.displayName.toLowerCase().trim() === name.toLowerCase().trim());

            key = resource?.nbt !== undefined ? `nbt:${resource.nbt}` : `item:${resource?.name ?? name}`;
          } else if (!name.startsWith("nbt:")) {
            key = `item:${this._expandPrefix(name)}`;
          }
          const displayName = name.startsWith("nbt:") ? name : this._expandPrefix(name);
          const count = Number(countStr);

          return `Took ${this.server.take(this.storageName, key, count)} ${key}`;
        },
      },
      {
        keywords: ["craft", "c"],
        completeFn: (partial: string) => {
          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .flatMap((recipe) => [this._shortenPrefix(recipe.name), recipe.name])
            .filter((name) => name.startsWith(partial));
        },
        action: (name: string = "", count: string = "1") => {
          if (name === "") {
            return `Usage: craft [recipe] [count=1]`;
          }

          return `crafted ${this.server.craft(this._expandPrefix(name), Number(count))} times`;
        },
      },
    ];
  }
}
