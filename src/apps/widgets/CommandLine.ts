import Cache from "../../Cache";
import RPC from "../../RPC";
import { ellipsis } from "../../util/string";
import { Resource } from "../../StorageManager";
import { JobProgress } from "../../Queue";
import { ServerRPC } from "../Server.d";

type TextCompleter = (partial: string) => string[];

const FUEL_ACTIONS = ["add", "rm", "remove", "help"];

const FUEL_USAGE = [
  "Usage:",
  " - fuel",
  " - fuel add [item] [min_kept] [priority]",
  " - fuel rm [item]",
  "The lowest priority is burned first",
].join("\n");

interface Command {
  keywords: string[];
  completeFn: TextCompleter;
  action: (...args: string[]) => any;
}

export default class CommandLine {
  server: ServerRPC;
  storageName: string;
  history: string[] = [];
  keepHistory: boolean;
  historyLocation: string;
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

  constructor(server: ServerRPC, storageName: string, keepHistory = true, historyLocation = "/.history") {
    this.server = server;
    this.storageName = storageName;
    this.keepHistory = keepHistory;
    this.historyLocation = historyLocation;

    if (keepHistory) {
      this.restoreHistory();
    }
  }

  restoreHistory() {
    if (!fs.exists(this.historyLocation)) {
      return;
    }

    const [hFile] = fs.open(this.historyLocation, "r");

    if (hFile === undefined) {
      return;
    }

    this.history = textutils.unserialise(hFile.readAll() ?? "[]") as string[];

    hFile.close();
  }

  saveHistory() {
    //todo:magic number
    while (this.history.length > 1000) this.history.shift();

    const [hFile, reason] = fs.open(this.historyLocation, "w");

    if (hFile === undefined) {
      throw new Error(`Unable to write command history: ${reason}`);
    }

    hFile.write(textutils.serialise(this.history, { compact: false, allow_repetitions: true }));
    hFile.close();
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

  /** Reads a take count: a bare number, `Ns` for N stacks of the item, or `all`/`*` for everything. */
  _parseCount(input: string, stackSize?: number): number | "all" | undefined {
    if (input === "all" || input === "*") {
      return "all";
    }

    if (input.length > 1 && input.endsWith("s")) {
      const stacks = Number(input.slice(0, -1));

      return Number.isNaN(stacks) || stackSize === undefined ? undefined : stacks * stackSize;
    }

    const count = Number(input);

    return Number.isNaN(count) ? undefined : count;
  }

  /** Peels a trailing count off the arguments, leaving the rest as the name. */
  _splitCount(parts: string[]): [string, string | undefined] {
    const last = parts[parts.length - 1] ?? "";

    return this._parseCount(last, 1) === undefined
      ? [parts.join(" "), undefined]
      : [parts.slice(0, -1).join(" "), last];
  }

  /** Peels every trailing count off the arguments, leaving the rest as the name. */
  _splitCounts(parts: string[]): [string, string[]] {
    const remaining = [...parts];
    const counts: string[] = [];

    while (remaining.length > 0 && this._parseCount(remaining[remaining.length - 1], 1) !== undefined) {
      counts.unshift(remaining.pop() as string);
    }

    return [remaining.join(" "), counts];
  }

  /** Finds the stored resource a hand-typed name refers to, matching id, display name or short prefix. */
  _findResource(name: string): Resource | undefined {
    const needle = this._expandPrefix(name).toLowerCase().trim();

    return this.cache
      .remember("list", () => this.server.list())
      .find((resource) =>
        [resource.displayName, resource.name, this._shortenPrefix(resource.name)].some(
          (candidate) => candidate.toLowerCase().trim() === needle,
        ),
      );
  }

  /** Turns a name into a storage key: the nbt hash when the stored stack carries one, else an item id. */
  _toKey(name: string, resource?: Resource): string {
    if (resource?.nbt !== undefined) {
      return `nbt:${resource.nbt}`;
    }

    if (name.startsWith("nbt:")) {
      return name;
    }

    return `item:${resource?.name ?? this._expandPrefix(name)}`;
  }

  /** The full item id, which only a stored stack or a namespaced name can give. */
  _toItemId(name: string, resource?: Resource): string | undefined {
    const id = resource?.name ?? this._expandPrefix(name);

    return id.includes(":") ? id : undefined;
  }

  /** A leading `#` matches the item's tags, which are nowhere in its name. */
  _matches(resource: Resource, needle: string): boolean {
    if (needle.startsWith("#")) {
      return this._tags(resource).some((tag) => tag.includes(needle.substring(1)));
    }

    return [resource.name, resource.displayName, this._shortenPrefix(resource.name)].some((haystack) =>
      haystack.toLowerCase().includes(needle),
    );
  }

  _tags(resource: Resource): string[] {
    const tags: string[] = [];

    for (const [tag, present] of resource.tags) {
      if (present) {
        tags.push(tag.toLowerCase());
      }
    }

    return tags;
  }

  /** Offers every tag namespaced, shortened and bare, so the namespace need not be typed first. */
  _completeTag(partial: string): string[] {
    const candidates = new LuaSet<string>();

    for (const resource of this.cache.remember("list", () => this.server.list())) {
      for (const tag of this._tags(resource)) {
        candidates.add(`#${tag}`);
        candidates.add(`#${this._shortenPrefix(tag)}`);
        candidates.add(`#${tag.substring(tag.indexOf(":") + 1)}`);
      }
    }

    const output: string[] = [];

    for (const candidate of candidates) {
      if (candidate.startsWith(partial)) {
        output.push(candidate);
      }
    }

    return output.sort();
  }

  _completeItem(partial: string = ""): string[] {
    partial = partial.toLowerCase();

    return this.cache
      .remember("list", () => this.server.list())
      .flatMap((resource) => [this._shortenPrefix(resource.name), resource.name, resource.displayName])
      .filter((name) => name.toLowerCase().startsWith(partial));
  }

  exec(commandLine: string = ""): string {
    this.history.push(commandLine);
    this.saveHistory();

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
        keywords: ["index"],
        completeFn: (partial: string) => [],
        action: () => {
          return `Indexed ${this.server.index()} item types`;
        },
      },
      {
        keywords: ["rebootAll"],
        completeFn: (partial: string) => [],
        action: () => {
          RPC.broadcastNotify("reboot");
          os.reboot();
        },
      },
      {
        keywords: ["status"],
        completeFn: (partial: string) => [],
        action: () => {
          let used = 0;
          let size = 0;
          let types = 0;
          let count = 0;
          let cacheSize = 0;
          let craftable = 0;
          let fragmented = 0;
          let jobs: JobProgress[] = [];

          parallel.waitForAll(
            () => (used = this.server.used()),
            () => (size = this.server.size()),
            () => (types = this.server.list().length),
            () => (count = this.server.count()),
            () => (cacheSize = this.server.cacheSize()),
            () => (craftable = this.server.listCraftable().length),
            () => (fragmented = this.server.fragmented()),
            () => (jobs = this.server.jobs()),
          );

          const percent = size === 0 ? 0 : Math.floor((used / size) * 100);
          const perSlot = used === 0 ? 0 : Math.floor(count / used);

          const rows: (number | string[])[] = [
            colors.lightBlue,
            ["Slots", `${used} / ${size} used (${percent}%)`],
            ["Free", `${size - used} slots`],
            ["Items", `${count} in ${types} types`],
            ["Density", `${perSlot} per used slot`],
            ["Fragmented", `${fragmented} slots recoverable`],
            ["Craftable", `${craftable} recipes`],
            ["Cache", `${cacheSize} records`],
          ];

          for (const job of jobs) {
            const target = ellipsis(this._shortenPrefix(job.target), 24);

            rows.push(job.error === undefined ? colors.orange : colors.red);
            rows.push([job.name, job.error ?? `${job.done}/${job.total} ${target}`]);
          }

          return rows;
        },
      },
      {
        keywords: ["list", "l"],
        completeFn: (partial: string) => {
          partial = partial.toLowerCase();

          if (partial.startsWith("#")) {
            return this._completeTag(partial);
          }

          return this.cache
            .remember("list", () => this.server.list())
            .flatMap((resource) => [resource.name, resource.displayName, this._shortenPrefix(resource.name)])
            .filter((name) => name.toLowerCase().startsWith(partial));
        },
        action: (...parts: string[]) => {
          const needle = parts.join(" ").toLowerCase();

          const rows = this.cache
            .remember("list", () => this.server.list())
            .filter((resource) => this._matches(resource, needle))
            .sort((a, b) => b.count - a.count)
            // todo replace with something better
            .map((r) =>
              [r.count, ellipsis(this._shortenPrefix(r.name), 20), ellipsis(r.displayName, 20)].map((v) => `${v}`),
            );

          return [8, colors.lightBlue, ["Count", "Name", "Display Name"], colors.lightGray, ...rows];
        },
      },
      {
        keywords: ["listCraftable", "lc"],
        completeFn: (partial: string = "") => {
          partial = partial.toLowerCase();

          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .flatMap((recipe) => [this._shortenPrefix(recipe.name), recipe.name])
            .filter((name) => name.toLowerCase().startsWith(partial));
        },
        action: (...parts: string[]) => {
          const name = parts.join(" ").toLowerCase();

          const rows = this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .filter((recipe) =>
              [recipe.name, this._shortenPrefix(recipe.name)].some((haystack) => haystack.toLowerCase().includes(name)),
            )
            .sort((a, b) => b.count - a.count)
            .map((r) => [ellipsis(this._shortenPrefix(r.name), 42), r.count].map((v) => `${v}`));

          return [8, colors.lightBlue, ["Name", "Count"], colors.lightGray, ...rows];
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
        completeFn: (partial: string = "") => this._completeItem(partial),
        action: (...parts: string[]) => {
          const countStr = parts.pop() ?? "";
          const name = parts.join(" ");

          if (name === "") {
            return `Usage: take [item] [count|Ns|all]`;
          }

          const resource = this._findResource(name);
          const count = this._parseCount(countStr, resource?.maxCount);

          if (count === undefined) {
            return `Cannot read count "${countStr}"`;
          }

          const key = this._toKey(name, resource);

          return `Took ${this.server.take(this.storageName, key, count)} ${key}`;
        },
      },
      {
        keywords: ["craft", "c"],
        completeFn: (partial: string = "") => {
          partial = partial.toLowerCase();

          return this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .flatMap((recipe) => [this._shortenPrefix(recipe.name), recipe.name])
            .filter((name) => name.toLowerCase().startsWith(partial));
        },
        action: (...parts: string[]) => {
          const [name, countStr] = this._splitCount(parts);

          if (name === "") {
            return `Usage: craft [recipe] [times|all]`;
          }

          const needle = this._expandPrefix(name).toLowerCase();
          const recipe = this.cache
            .remember("listCraftable", () => this.server.listCraftable())
            .find((r) => r.name.toLowerCase() === needle);

          if (recipe === undefined) {
            return `Nothing craftable matches "${name}"`;
          }

          const times = this._parseCount(countStr ?? "1");

          if (times === undefined) {
            return `Cannot read count "${countStr}"`;
          }

          const count = times === "all" ? recipe.count : times;

          return this.server.craft(recipe.name, count) ? `Crafting ${count}x ${recipe.name}` : `Craft queue is full`;
        },
      },
      {
        keywords: ["smelt", "sm"],
        completeFn: (partial: string = "") => this._completeItem(partial),
        action: (...parts: string[]) => {
          const [name, countStr] = this._splitCount(parts);

          if (name === "") {
            return `Usage: smelt [item] [count|Ns|all]`;
          }

          const resource = this._findResource(name);
          const count = this._parseCount(countStr ?? "1", resource?.maxCount);

          if (count === undefined) {
            return `Cannot read count "${countStr}"`;
          }

          const total = count === "all" ? (resource?.count ?? 0) : count;

          if (total <= 0) {
            return `Nothing stored for "${name}"`;
          }

          const key = this._toKey(name, resource);

          return this.server.smelt(key, total) ? `Smelting ${total}x ${key}` : `Smelt queue is full`;
        },
      },
      {
        keywords: ["fuel"],
        completeFn: (partial: string = "") => {
          const [action, ...rest] = partial.split(" ");

          if (rest.length === 0) {
            return FUEL_ACTIONS.filter((candidate) => candidate.startsWith(action));
          }

          return this._completeItem(rest.join(" ")).map((item) => `${action} ${item}`);
        },
        action: (...parts: string[]) => {
          const [action, ...rest] = parts;

          if (action === undefined || action === "") {
            const rows = this.server
              .fuelList()
              .map((entry) => [ellipsis(this._shortenPrefix(entry.item), 28), `${entry.minKept}`, `${entry.priority}`]);

            return [8, colors.lightBlue, ["Fuel", "Kept", "Pri"], colors.lightGray, ...rows];
          }

          if (action === "help" || !FUEL_ACTIONS.includes(action)) {
            return FUEL_USAGE;
          }

          const [name, counts] = this._splitCounts(rest);
          const resource = this._findResource(name);
          const item = this._toItemId(name, resource);

          if (item === undefined) {
            return `Cannot resolve item "${name}"`;
          }

          if (action !== "add") {
            return this.server.fuelRemove(item) ? `Dropped fuel ${item}` : `${item} is not registered as fuel`;
          }

          const [minKeptStr, priorityStr] = counts;
          const minKept = this._parseCount(minKeptStr ?? "0", resource?.maxCount);
          const priority = priorityStr === undefined ? undefined : this._parseCount(priorityStr, 1);

          if (minKept === undefined || minKept === "all" || priority === "all") {
            return `Cannot read count "${counts.join(" ")}"`;
          }

          const entry = this.server.fuelAdd(item, minKept, priority);

          return `Fuel ${entry.item}, keeping ${entry.minKept}, priority ${entry.priority}`;
        },
      },
    ];
  }
}
