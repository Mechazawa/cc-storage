import Component from "./Component";
import CommandLineWidget from "../widgets/CommandLine";
import Logger from "../../Logger";
import { ServerRPC } from "../Server.d";

export default class CommandLine extends Component {
  repl: CommandLineWidget;
  logger: Logger;
  server: ServerRPC;

  constructor(redirect: Redirect, server: ServerRPC, storageName: string) {
    super(redirect);

    this.repl = new CommandLineWidget(server, storageName);
    this.logger = new Logger();
    this.server = server;

    this.logger.setRedirect(redirect);
  }

  run(): void {
    while (true) {
      parallel.waitForAll(
        () => this.repl.cache.set("list", this.server.list()),
        () => this.repl.cache.set("listCraftable", this.server.listCraftable()),
        () => {
          this.logger.redirect.setTextColor(colors.orange);
          this.logger.write("] ", false);
          this.logger.redirect.setTextColor(colors.white);

          const command = this.logger.read(undefined, this.repl.history, (x) => this.repl.completeFn(x));

          try {
            const output = this.repl.exec(command);

            if (Array.isArray(output)) {
              this.logger.tabulate(12, ...output);
            } else if (output !== undefined) {
              this.logger.log(output);
            }
          } catch (e) {
            this.logger.error(e as string);
          }
        }
      );
    }
  }
}
