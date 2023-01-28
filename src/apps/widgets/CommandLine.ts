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

  constructor(server: ServerRPC, storageName: string) {
    this.server = server;
    this.storageName = storageName;
  }

  completeFn(partial: string = ""): string[] {
    if (partial === "") {
      return [];
    }
    if (partial.includes(" ")) {
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
        keywords: ["defrag"],
        completeFn: (partial: string) => [],
        action: () => {
          return `freed ${this.server.defragment()} slots`;
        },
      },
      {
        keywords: ["status"],
        completeFn: (partial: string) => [],
        action: () => {
          return `
Storage usage: ${this.server.used()}/${this.server.size()}
${this.server.list().length} item types
Total ${this.server.count()} items
          `.trim();
        },
      },
      {
        keywords: ["list", "l"],
        completeFn: (partial: string) => {
          return this.cache
            .remember("list", () => this.server.list())
            .map((resource) => resource.name)
            .filter((name) => name.startsWith(partial));
        },
        action: (name: string) => {
          const rows = this.cache
            .remember("list", () => this.server.list())
            .filter((resource) => resource.name.startsWith(name ?? ""))
            .sort((a, b) => b.count - a.count)
            .map((r) => [r.count, r.name.replace('minecraft:', 'mc:'), r.displayName].map((v) => `${v}`));

          (new Logger()).tabulate(8, colors.lightBlue, ["Count", "Display Name", "Name"], colors.lightGray, ...rows);
        },
      },
      {
        keywords: ["listCraftable", "lc"],
        completeFn: (partial: string) => {
          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .map((recipe) => recipe.name)
            .filter((name) => name.startsWith(partial));
        },
        action: (name: string) => {
          const rows = this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .filter((recipe) => recipe.name.startsWith(name ?? ""))
            .sort((a, b) => b.count - a.count)
            .map((r) => [r.name.replace('minecraft:', 'mc:'), r.count].map((v) => `${v}`));

            (new Logger()).tabulate(8, colors.lightBlue, ["Name", "Count"], colors.lightGray, ...rows);
        },
      },
      {
        keywords: ["store", "s"],
        completeFn: (partial: string) => [],
        action: () => {
          return `stored ${this.server.storeAll(this.storageName)} items`;
        },
      },
      {
        keywords: ["take", "t"],
        completeFn: (partial: string) => {
          return this.cache
            .remember("list", () => this.server.list())
            .map((resource) => resource.name)
            .filter((name) => name.startsWith(partial));
        },
        action: (name: string, countStr: string = "1") => {
          const key = name.startsWith("nbt:") ? name : `item:${name}`;
          const count = Number(countStr);

          return `Took ${this.server.take(this.storageName, key, count)} ${name}`;
        },
      },
      {
        keywords: ["craft", "c"],
        completeFn: (partial: string) => {
          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .map((resource) => resource.name)
            .filter((name) => name.startsWith(partial));
        },
        action: (name: string, count?: string) => `crafted ${this.server.craft(name, Number(count ?? 1))} times`,
      },
    ];
  }
}
