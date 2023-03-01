import { ClientConfig, InterfaceConfig } from "../Config";
import App from "./App";
import { ServerRPC } from "./Server.d";
import RPC from "../RPC";
import CommandLine from "./components/CommandLine";
import Lib from "../Lib";
import { Basalt } from "../../types/Basalt/Basalt.d";
import { List } from "../../types/Basalt/List";
import Cache from "../Cache";
import { ellipsis, rpad } from "../util/string";
import StorageManager, { StorageLocation } from "../StorageManager";

const basalt = Lib.requireRemote<Basalt>("https://github.com/Pyroxenium/Basalt/releases/download/v1.6.5/basalt.lua");

export default class Interface extends App {
  server?: ServerRPC;
  cache = new Cache();

  declare config: InterfaceConfig;

  sortCount = false;

  constructor(config: InterfaceConfig) {
    super(config);
  }

  connect(tries = 5) {
    RPC.openModems();

    const uri = `${RPC.protocol}://${this.config.host}`;
    let hostId: number;

    while (true) {
      tries -= 1;
      hostId = rednet.lookup(RPC.protocol, this.config.host) as number;

      if (hostId !== undefined) {
        break;
      }

      this.logger.warn("Failed to connect");

      if (hostId === undefined && tries === 0) {
        break;
      }

      this.logger.log("Retrying connection...");
      sleep(1);
    }

    if (hostId === undefined) {
      throw new Error(`Could not find ${uri}`);
    }

    if (typeof hostId !== "number") {
      hostId = hostId[0];
    }

    this.server = RPC.wrap(hostId) as ServerRPC | undefined;

    if (this.server === undefined) {
      throw new Error(`Could not connect to ${uri}`);
    }

    this.server.list = this.cache.memoize("acc:list", this.server.list.bind(this));

    this.logger.log(`Connected to ${uri}`);

    const cacheSeconds = 60;

    this.server.count = this.cache.memoize("acc:count", this.server.count.bind(this.server), cacheSeconds);
    this.server.size = this.cache.memoize("acc:size", this.server.size.bind(this.server), cacheSeconds);
    this.server.used = this.cache.memoize("acc:used", this.server.used.bind(this.server), cacheSeconds);
    this.server.free = this.cache.memoize("acc:free", this.server.free.bind(this.server), cacheSeconds);
    this.server.list = this.cache.memoize("acc:list", this.server.list.bind(this.server), cacheSeconds);
    this.server.listCraftable = this.cache.memoize(
      "acc:listCraftable",
      this.server.listCraftable.bind(this.server),
      cacheSeconds
    );

    this.server.defragment = this._invalidates("acc:*", this.server.defragment.bind(this.server));
    this.server.storeAll = this._invalidates("acc:*", this.server.storeAll.bind(this.server));
    this.server.store = this._invalidates("acc:*", this.server.store.bind(this.server));
    this.server.take = this._invalidates("acc:*", this.server.take.bind(this.server));
    this.server.craft = this._invalidates("acc:*", this.server.craft.bind(this.server));
    this.server.flushCache = this._invalidates("*", this.server.flushCache.bind(this.server));
  }

  _invalidates<T extends Function>(key: string, fn: T): T {
    return ((...args: any[]) => {
      const out = fn(...args);
      this.cache.delete("acc:*");

      return out;
    }) as unknown as T;
  }

  run(): void {
    this.connect();
    this.runGui();
  }

  runCommandLine(): void {
    if (this.server === undefined) throw Error("Failed to start command line");

    const commandLine = new CommandLine(term.current(), this.server, this.config.storage[0]);

    commandLine.run();
  }

  takeItem(itemKey: string, amount: number): void {
    this.server?.take(this.config.storage[0], itemKey.toString(), amount);
  }

  listItems(listObject: List, filter?: string | number): void {
    const norm = (s: any) => ("" + s).toLowerCase().trim().replace("_", " ");
    const query = norm(filter ?? "");
    listObject.clear();
    let searchResults = this.server?.list() ?? [];

    if (query !== "") {
      searchResults = searchResults.filter(function (el) {
        return norm(el.displayName).includes(query) || norm(el.key).includes(query) || norm(el.count).includes(query);
      });
    }
    // quick and dirty, the list itself needs to be sortable with better ui etc
    if (this.sortCount) {
      searchResults.sort((a, b) => a.count - b.count);
    } else {
      searchResults.sort((a, b) => b.count - a.count);
    }

    // Check whether list exists
    searchResults.forEach((e) => {
      listObject.addItem(rpad(`${e.count}`, 6) + ellipsis(e.displayName, 30), colors.black, colors.white, {
        key: e.key,
      });
    });
  }

  runGui(): void {
    const chest = peripheral.wrap(this.config.storage[0]) as Inventory;

    const main = basalt.createFrame();

    // Background panes
    main.addLayoutFromString(
      '<pane width="51" height="19" bg="black" /><pane width="17" height="19" x="35" y="1" bg="gray" />'
    );

    //List

    const headerRow = main.addLabel();

    headerRow
      .setText("Items in buffer: ")
      .setPosition(1, 2)
      .setForeground(colors.lightGray)
      .setBackground(colors.black)
      .setSize(34, 1);

    const currentStoredList = main.addList();
    currentStoredList.setPosition(1, 3).setSize(34, 17).setBackground(colors.black);

    for (const [name, count] of chest.list()) {
      currentStoredList.addItem(ellipsis(count.name.toString(), 30), colors.black, colors.white);
    }

    // Interface handles automatic importing, exporting, and stocking of items.
    // Modes: Passive provider, active provider, requester, level emitter(future)
    const titleBar = main.addLabel();

    titleBar.setText(" cc-cloud-storage : Interface").setBackground(colors.lime).setPosition(1, 1).setSize(51, 1);

    const modeDropdownLabel = main.addLabel();
    modeDropdownLabel.setText("Mode:").setPosition(36, 3).setForeground(colors.black);

    const modeDropdown = main.addDropdown();
    modeDropdown
      .addItem("Passive Provider", colors.green, colors.black, { mode: "1" })
      .addItem("Active Provider", colors.green, colors.black, { mode: "2" })
      .addItem("Requester", colors.green, colors.black, { mode: "3" });
    modeDropdown
      .setPosition(36, 5)
      .setSize(14, 1)
      .setSelectedItem(colors.lime, colors.white)
      .setBackground(colors.lime)
      .selectItem(parseInt(this.config.mode));

    modeDropdown.onChange(() => (this.config.mode = modeDropdown.getValue().args[1].mode));

    switch (modeDropdown.getValue().args[1].mode) {
      case "1":
        // Make items known to server network but don't import TODO figure out how
        break;
      case "2":
        // Store all if any items present
        this.logger.log(currentStoredList.getItemCount().toString());
        if (currentStoredList.getItemCount() > 0) {
          this.server?.storeAll(this.config.storage[0]);
        }
        break;
      case "3":
        // Check if items which are in request list are present, if not get missing values. (maybe store anything not in the list)
        break;
      default:
        throw new Error(`Invalid operation mode: "${this.config.mode}"`);
    }

    basalt.autoUpdate();
  }

  serialise(): LuaMap<string, any> {
    return {
      config: this.config,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Interface {
    return new this(input.get("config"));
  }
}
