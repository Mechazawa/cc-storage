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
    this.server.listCraftable = this.cache.memoize("acc:listCraftable", this.server.listCraftable.bind(this.server), cacheSeconds);

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
      this.cache.delete('acc:*');
      
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
    const norm = (s: any) => ('' + s).toLowerCase().trim().replace('_', ' ').replace(new RegExp('\s+', 'g'), ' ');
    const query = norm(filter ?? "");
    listObject.clear();
    let searchResults = this.server?.list().filter(function (el) {
      return  norm(el.displayName).includes(query) || 
              norm(el.key).includes(query) || 
              norm(el.count).includes(query);
    });
    // let listCraftable = this.server?.listCraftable();
    if (searchResults) {
      // Check whether list exists
      searchResults.forEach((e) => {
        listObject.addItem(rpad(`${e.count}`, 6) + ellipsis(e.displayName, 32), colors.black, colors.white, { key: e.key });
      });
    } else {
      this.logger.error("item list not found");
    }
  }

  runGui(): void {
    const main = basalt.createFrame();
    const listToggleStateLabels = ["All", "Craftable", "Stored"];
    let listToggleState = 0;
    // TITLE BAR
    // The title bar is also the place to return errors/user feedback. Turn the bar a different color when feedback is available
    // For example: "Not enough materials to craft <x>", "16 <item name> retrieved sucesfully"
    const titleBar = main.addLabel();

    titleBar
      .setText(" cc-cloud-storage : hold button to complete action")
      .setBackground(colors.orange)
      .setPosition(1, 1)
      .setSize(51, 1);

    main.addLayoutFromString(
      '<pane width="51" height="19" bg="black" /><pane width="13" height="19" x="39" y="1" bg="gray" />'
    );

    // SEARCH BAR
    const searchBar = main.addInput();
    let searchQuery = "";

    searchBar.setBackground(colors.gray).setPosition(1, 2).setSize(39, 2).setDefaultText("Search...");
    searchBar.onChange(() => {
      // Maybe we want to implement a waiting function to avoid searching on every keystroke
      searchQuery = searchBar.getValue();
      this.listItems(itemList, searchQuery);
      // Set filtering in item table
    });
    searchBar.onKey((e, key) => {
      if (key === keys.enter) {
        // this.listItems(itemList,searchQuery)
      }
    });

    // TODO implement search, ideally with some placeholder text

    // ITEM LIST TABLE
    // itemTable contains a header row and an itemRow for each item, item amount is reduced
    // NOTE: itemTable is the only scrollable element in the UI
    const itemTable = { x: 2, y: 4 };

    const headerRow = main.addLabel();

    headerRow
      .setText("#     Name")
      .setPosition(itemTable.x, itemTable.y)
      .setForeground(colors.white)
      .setBackground(colors.black)
      .setSize(38, 1);

    let itemList = main.addList().setSelectedItem(colors.red, colors.black);
    itemList.setScrollable(true);

    this.listItems(itemList);
    itemList.setPosition(itemTable.x + 1, itemTable.y + 1).setSize(37, 15);

    // SIDE/ACTION MENU
    // sideMenu contains all functional buttons dealing with moving items
    const sideMenu = { x: 40, y: 3, width: 11 };

    // Button toggeling which items to display, states are: All, Craftable, Stored. Pressing the button toggles the display of each item
    const listToggleLabel = main.addLabel();

    listToggleLabel
      .setText("List:")
      .setPosition(sideMenu.x + 1, sideMenu.y)
      .setSize(sideMenu.width, 1);

    const listToggle = main.addButton();

    listToggle
      .setText("All")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x + 1, sideMenu.y + 1)
      .setSize(sideMenu.width, 3)
      .setBorder(colors.gray);

    listToggle.onClick(() => {
      this.logger.debug("Clicked list toggle button");
      // cycle state to next state (out of 3 possible states)
      listToggleState = (listToggleState + 1) % 3;
      // set text of button according to new state
      listToggle.setText(listToggleStateLabels[listToggleState]);
      // TODO filter itemTable according to new state
    });

    listToggle.onClick(() => {
      listToggle.setBackground(colors.lightBlue).setBorder(colors.black);
    });

    listToggle.onClickUp(() => {
      listToggle.setBackground(colors.orange).setBorder(colors.gray);
    });
    // TODO REFACTOR TO REFLECT PROPER FUNCTIONS
    // Button group taking care of retrieving items, pressing the buttons takes items to the client chest (1,16,64,all respectively)
    // if there is not enough items, retrieve whatever is present
    const takeButtonGroupLabel = main.addLabel();

    takeButtonGroupLabel
      .setText("List:")
      .setPosition(sideMenu.x + 1, sideMenu.y + 2)
      .setSize(sideMenu.width, 1)
      .setBorder(colors.gray);

    const takeButtonGroup = {};
    // Button group taking care of kicking of crafts, pressing the buttons kicks of crafts (1,16,64 respectively), the user needs to retrieve them afterwards
    // If not enough items are available, cancel craft and present feedback in the title bar (Not enough items to craft <x>, missing <y>)
    // Maybe we want to disable the buttons beforehand if there is no recipe available and/or there is no materials
    const craftButtonGroupLabel = main.addLabel();

    craftButtonGroupLabel
      .setText("Take:")
      .setPosition(sideMenu.x + 1, sideMenu.y + 5)
      .setSize(sideMenu.width, 1);

    const craftButtongroup = {};

    const takeButtonSingle = main.addButton();
    takeButtonSingle
      .setText("1")
      .setPosition(sideMenu.x + 1, sideMenu.y + 6)
      .setSize(3, 3)
      .setBackground(colors.orange)
      .setBorder(colors.gray);

    const takeButtonSixteen = main.addButton();
    takeButtonSixteen
      .setText("16")
      .setPosition(sideMenu.x + 4, sideMenu.y + 6)
      .setSize(4, 3)
      .setBackground(colors.orange)
      .setBorder(colors.gray);

    const takeButtonSixtyfour = main.addButton();
    takeButtonSixtyfour
      .setText("64")
      .setPosition(sideMenu.x + 8, sideMenu.y + 6)
      .setSize(4, 3)
      .setBackground(colors.orange)
      .setBorder(colors.gray);

    takeButtonSingle.onClick(() => {
      takeButtonSingle.setBackground(colors.yellow).setBorder(colors.black);
      const itemKey = itemList.getValue().args[1].key;
      this.takeItem(itemKey.toString(), 1);
      const currentSelected = itemList.getItemIndex();
      this.listItems(itemList, searchQuery);
      itemList.selectItem(currentSelected);
    });

    takeButtonSixteen.onClick(() => {
      takeButtonSixteen.setBackground(colors.yellow).setBorder(colors.black);
      const itemKey = itemList.getValue().args[1].key;
      this.takeItem(itemKey.toString(), 16);
      const currentSelected = itemList.getItemIndex();
      this.listItems(itemList, searchQuery);
      itemList.selectItem(currentSelected);
    });

    takeButtonSixtyfour.onClick(() => {
      takeButtonSixtyfour.setBackground(colors.yellow).setBorder(colors.black);
      const itemKey = itemList.getValue().args[1].key;
      this.takeItem(itemKey.toString(), 64);
      const currentSelected = itemList.getItemIndex();
      this.listItems(itemList, searchQuery);
      itemList.selectItem(currentSelected);
    });

    takeButtonSingle.onClickUp(() => {
      takeButtonSingle.setBackground(colors.orange).setBorder(colors.gray);
    });

    takeButtonSixteen.onClickUp(() => {
      takeButtonSixteen.setBackground(colors.orange).setBorder(colors.gray);
    });

    takeButtonSixtyfour.onClickUp(() => {
      takeButtonSixtyfour.setBackground(colors.orange).setBorder(colors.gray);
    });

    // Store button empties client chest into the network
    const storeAllButtonLabel = main.addLabel();

    storeAllButtonLabel
      .setText("Store:")
      .setPosition(sideMenu.x + 1, sideMenu.y + 10)
      .setSize(sideMenu.width, 1);

    const storeAllButton = main.addButton();

    storeAllButton
      .setText("Store all")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x + 1, sideMenu.y + 11)
      .setSize(sideMenu.width, 3)
      .setBorder(colors.gray);

    storeAllButton.onClick(() => {
      // this.logger.debug("Clicked store all button");
      // Implement function here to empty client into network
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
