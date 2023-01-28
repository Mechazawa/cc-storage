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

    return command?.action(...args) ?? "ok";
  }

  getCommands(): Command[] {
    return [
      {
        keywords: ["defrag"],
        completeFn: (partial: string) => [],
        action: () => {
          return `freed ${this.server.defragment()} slots`;
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
          const possible = [];
          const listing = this.cache.remember("list", () => this.server.list());
          for (const resource of listing) {
            if (resource.name.startsWith(partial)) {
              possible.push(resource.name);
            }
          }

          return possible;
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
          const possible = [];
          const listing = this.cache.remember("listCraftable", () => this.server.listCraftable());

          for (const recipe of listing) {
            if (recipe.name.startsWith(partial)) {
              possible.push(recipe.name);
            }
          }

          return possible;
        },
        action: (name: string, count?: string) => `crafted ${this.server.craft(name, Number(count ?? 1))} times`,
      },
    ];
  }
}
