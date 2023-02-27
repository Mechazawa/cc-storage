import { ClientConfig } from "../Config";
import App from "./App";
import { ServerRPC } from "./Server.d";
import RPC from "../RPC";
import CommandLine from "./components/CommandLine";
import Lib from "../Lib";
import { Basalt } from "../../types/Basalt/Basalt.d";
import { List } from "../../types/Basalt/List";
import Cache from "../Cache";
import { ellipsis, rpad } from "../util/string";

const basalt = Lib.requireRemote<Basalt>("https://github.com/Pyroxenium/Basalt/releases/download/v1.6.5/basalt.lua");

export default class Client extends App {
  server?: ServerRPC;
  cache = new Cache();

  declare config: ClientConfig;

  sortCount = false;

  constructor(config: ClientConfig) {
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

  listCraftable(listObject: List): void {
    listObject.clear();
    const craftableList = this.server?.listCraftable() ?? [];
    craftableList.forEach((e) => {
      listObject.addItem(rpad(`${e.count}`, 6) + ellipsis(e.name, 30), colors.black, colors.white, {
        key: e.name, outputN: e.output.length
      });
    });
  }

  runGui(): void {
    const main = basalt.createFrame();
    const listToggleStateLabels = ["Stored", "Craftable"];
    let listToggleState = 0;
    // Background panes
    main.addLayoutFromString(
      '<pane width="51" height="19" bg="black" /><pane width="13" height="19" x="39" y="1" bg="gray" />'
    );

    // Title bar
    // The title bar is also the place to return errors/user feedback. Turn the bar a different color when feedback is available
    // For example: "Not enough materials to craft <x>", "16 <item name> retrieved sucesfully"
    const titleBar = main.addLabel();

    titleBar
      .setText(" cc-cloud-storage : hold button to complete action")
      .setBackground(colors.orange)
      .setPosition(1, 1)
      .setSize(51, 1);

    // Search bar
    const searchBar = main.addInput();
    let searchQuery = "";

    searchBar.setBackground(colors.gray).setPosition(1, 2).setSize(39, 1).setDefaultText("Search...");
    searchBar.onChange(() => {
      // Maybe we want to implement a waiting function to avoid searching on every keystroke
      searchQuery = searchBar.getValue();
      this.listItems(itemList, searchQuery);
      // Set filtering in item table
    });

    // Item list
    // itemTable contains a header row and an itemRow for each item, item amount is reduced
    // NOTE: itemTable is the only scrollable element in the UI
    const itemTable = { x: 1, y: 3 };

    const headerRow = main.addLabel();
    let sortCount = false;

    headerRow
      .setText("#     Name")
      .setPosition(itemTable.x, itemTable.y)
      .setForeground(colors.lightGray)
      .setBackground(colors.black)
      .setSize(38, 1)
      .onClick(() => {
        sortCount = !sortCount;
        this.listItems(itemList, searchQuery);
      });

    let itemList = main.addList().setSelectedItem(colors.red, colors.black);
    itemList.setScrollable(true);
    this.listItems(itemList);

    itemList.setPosition(itemTable.x, itemTable.y + 1).setSize(37, 15);

    // Side menu
    // sideMenu contains all functional buttons dealing with moving items
    const sideMenu = { x: 40, y: 3, width: 11 };

    // List toggle toggles from Stored to Craftable and list those items
    const listButtonGroupLabel = main.addLabel();

    listButtonGroupLabel
      .setText("List:")
      .setPosition(sideMenu.x + 1, sideMenu.y)
      .setSize(sideMenu.width, 1)
      .setBorder(colors.gray);

    const listToggle = main.addButton();

    listToggle
      .setText("Stored")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x + 1, sideMenu.y + 1)
      .setSize(sideMenu.width, 3)
      .setBorder(colors.gray);

    listToggle.onClick(() => {
      // cycle state to next state (out of 2 possible states)
      listToggleState = (listToggleState + 1) % 2;
      // set text of button according to new state
      listToggle.setText(listToggleStateLabels[listToggleState]);
      switch (listToggleState) {
        case 0:
          this.listItems(itemList);
          takeButtonGroupLabel.setText("Take:")
          takeSubmitButton.setText("Take").setBackground(colors.orange).setBorder(colors.gray);
          listToggle.setBackground(colors.orange).setBorder(colors.gray);
          break;
        case 1:
          this.listCraftable(itemList);
          takeButtonGroupLabel.setText("Craft:")
          takeSubmitButton.setText("Craft").setBackground(colors.lightBlue);
          listToggle.setBackground(colors.lightBlue).setBorder(colors.black);
          break;
        default:
          this.logger.error("Invalid list toggle state");
      }
    });

    // Take items
    const takeButtonGroupLabel = main.addLabel();

    takeButtonGroupLabel
      .setText("Take:")
      .setPosition(sideMenu.x + 1, sideMenu.y + 5)
      .setSize(sideMenu.width, 1);

    const takeAmountInput = main.addInput();
    takeAmountInput
      .setPosition(sideMenu.x + 1, sideMenu.y + 6)
      .setInputType("number")
      .setBackground(colors.black)
      .setForeground(colors.orange)
      .setBorder(colors.gray)
      .setSize(11, 1)
      .setDefaultText("Amount");

    const takeSubmitButton = main.addButton();
    takeSubmitButton
      .setText("Take")
      .setBackground(colors.orange)
      .setBorder(colors.gray)
      .setPosition(sideMenu.x + 1, sideMenu.y + 7)
      .setSize(11, 3);

    takeSubmitButton.onClick(() => {
      takeSubmitButton.setBackground(colors.yellow).setBorder(colors.black);
      const itemKey = itemList.getValue().args[1].key;
      const takeAmount = parseInt(takeAmountInput.getValue());
      const currentSelected = itemList.getItemIndex();
      switch (listToggleState) {
        case 0:
          this.takeItem(itemKey.toString(), takeAmount);
          this.listItems(itemList, searchQuery);
          break;
        case 1:
          const numberOutPerCraft = parseInt(itemList.getValue().args[1].outputN)
          const numberOfCrafts = Math.ceil(takeAmount/numberOutPerCraft);
          this.server?.craft(itemKey.toString(), numberOfCrafts);
          this.listCraftable(itemList);
          break;
        default:
          this.logger.error("Invalid list toggle state");
      }
      itemList.selectItem(currentSelected);
    });

    takeSubmitButton.onClickUp(() => {
      takeSubmitButton.setBackground(colors.orange).setBorder(colors.gray);
    });

    // Store button empties client chest into the network
    const storeAllButtonLabel = main.addLabel();

    storeAllButtonLabel
      .setText("Store:")
      .setPosition(sideMenu.x + 1, sideMenu.y + 11)
      .setSize(sideMenu.width, 1);

    const storeAllButton = main.addButton();

    storeAllButton
      .setText("Store all")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x + 1, sideMenu.y + 12)
      .setSize(sideMenu.width, 3)
      .setBorder(colors.gray);

    storeAllButton.onClick(() => {
      // Store all items in client chest
      storeAllButton.setBackground(colors.yellow).setBorder(colors.black);
      this.server?.storeAll(this.config.storage[0]);
      this.listItems(itemList, searchQuery);
    });

    storeAllButton.onClickUp(() => {
      storeAllButton.setBackground(colors.orange).setBorder(colors.gray);
    });

    basalt.autoUpdate();
  }

  serialise(): LuaMap<string, any> {
    return {
      config: this.config,
    } as object as LuaMap<string, any>;
  }

  static deserialize(input: LuaMap<string, any>): Client {
    return new this(input.get("config"));
  }
}
