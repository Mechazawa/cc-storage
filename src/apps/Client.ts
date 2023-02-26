import { ClientConfig } from "../Config";
import App from "./App";
import { ServerRPC } from "./Server.d";
import RPC from "../RPC";
import CommandLine from "./components/CommandLine";
import Lib from "../Lib";
import { Basalt } from "../../types/Basalt/Basalt.d";

const basalt = Lib.requireRemote<Basalt>("https://github.com/Pyroxenium/Basalt/releases/download/v1.6.5/basalt.lua");

export default class Client extends App {
  server?: ServerRPC;

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

    this.logger.log(`Connected to ${uri}`);
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

  runGui(): void {
    const main = basalt.createFrame();
    // TODO needs refactoring in separate components
    // ** I'm probably going to mess up conventions here, feel free to refactor **
    // Components:
    // Title bar
    // Search bar
    // Item list table:
    //  -Header
    //  -Row
    // Side bar:
    //  -List toggle
    //  -Take item button group
    //  -Craft item button group
    //  -Store all button

    // TITLE BAR
    // The title bar is also the place to return errors/user feedback. Turn the bar a different color when feedback is available
    // For example: "Not enough materials to craft <x>", "16 <item name> retrieved sucesfully"
    const titleBar = main.addLabel();

    titleBar.setText("cc-cloud-storage").setBackground(colors.orange).setPosition(0, 0).setSize(51, 1);

    // SEARCH BAR
    const searchBar = main.addTextfield();
    let searchQuery = "";

    searchBar.setBackground(colors.gray).setPosition(0, 1).setSize(30, 1);
    searchBar.onChange(() => {
      // Maybe we want to implement a waiting function to avoid searching on every keystroke
      searchQuery = searchBar.getValue();
      // Set filtering in item table
    });

    // TODO implement search, ideally with some placeholder text

    // ITEM LIST TABLE
    // itemTable contains a header row and an itemRow for each item, item amount is reduced
    // NOTE: itemTable is the only scrollable element in the UI
    const itemTable = { x: 0, y: 3 };

    const headerRow = main.addLabel();

    headerRow.setText("#    Name").setPosition(itemTable.x, itemTable.y);

    const itemRow = { amount: "64k", name: "mc:apple" }; // new row for each item row

    // SIDE/ACTION MENU
    // sideMenu contains all functional buttons dealing with moving items
    const sideMenu = { x: 41, y: 1, width: 10, background: colors.gray };

    // Button toggeling which items to display, states are: All, Craftable, Stored. Pressing the button toggles the display of each item
    const listToggleLabel = main.addLabel();

    listToggleLabel.setText("List:").setPosition(sideMenu.x, sideMenu.y);

    const listToggle = main.addButton();

    const listToggleStateLabels = ["All", "Craftable", "Stored"];
    let listToggleState = 0;

    listToggle
      .setText("All")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x, sideMenu.y + 1);

    listToggle.onClick(() => {
      this.logger.debug("Clicked list toggle button");
      // cycle state to next state (out of 3 possible states)
      listToggleState = (listToggleState + 1) % 3;
      // set text of button according to new state
      listToggle.setText(listToggleStateLabels[listToggleState]);
      // TODO filter itemTable according to new state
    });

    // Button group taking care of retrieving items, pressing the buttons takes items to the client chest (1,16,64,all respectively)
    // if there is not enough items, retrieve whatever is present
    const takeButtonGroupLabel = main.addLabel();

    takeButtonGroupLabel.setText("List:").setPosition(sideMenu.x, sideMenu.y + 2);

    const takeButtonGroup = {};
    // Button group taking care of kicking of crafts, pressing the buttons kicks of crafts (1,16,64 respectively), the user needs to retrieve them afterwards
    // If not enough items are available, cancel craft and present feedback in the title bar (Not enough items to craft <x>, missing <y>)
    // Maybe we want to disable the buttons beforehand if there is no recipe available and/or there is no materials
    const craftButtonGroupLabel = main.addLabel();

    craftButtonGroupLabel.setText("Craft:").setPosition(sideMenu.x, sideMenu.y + 4);

    const craftButtongroup = {};

    // Store button empties client chest into the network
    const storeAllButtonLabel = main.addLabel();

    storeAllButtonLabel.setText("Store:").setPosition(sideMenu.x, sideMenu.y + 7);

    const storeAllButton = main.addButton();

    storeAllButton
      .setText("Store all")
      .setBackground(colors.orange)
      .setPosition(sideMenu.x, sideMenu.y + 8);

    storeAllButton.onClick(() => {
      this.logger.debug("Clicked store all button");
      // Implement function here to empty client into network
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
