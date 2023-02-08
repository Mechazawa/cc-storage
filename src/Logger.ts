import { pretty_print } from "cc.pretty";

export const Alignments = {
  LEFT: Symbol("LEFT"),
  CENTER: Symbol("CENTER"),
  RIGHT: Symbol("RIGHT"),

  typeof(v: any) {
    return v === Alignments.LEFT || v === Alignments.CENTER || v === Alignments.RIGHT;
  },
};

type Alignment = symbol;

export default class Logger {
  timestampFormat: string = "[%H:%M:%S] ";
  file?: WriteHandle;
  fileName?: string;
  timestamp: boolean;
  redirect: Redirect = term.current();
  showDebug = true;
  tag = false;

  constructor(timestamp: boolean = false, fileName?: string) {
    this.timestamp = timestamp;
    this.fileName = fileName;

    if (!fileName) {
      return;
    }

    this.file = fs.open(fileName, "a") as WriteHandle;
  }

  setRedirect(redirect: Redirect): void {
    this.redirect = redirect;
  }

  rotate(keep: number = 10) {
    if (this.fileName === undefined) {
      return;
    }

    const fileName = (x: number) => `${this.fileName}.${x}`;

    for (let i = keep; i > 0; i--) {
      if (fs.exists(fileName(i))) {
        fs.move(fileName(i), fileName(i + 1));
      }
    }

    if (fs.exists(fileName(keep + 1))) {
      fs.delete(fileName(keep + 1));
    }

    this.file?.close();
    fs.move(this.fileName, fileName(1));
    this.file = fs.open(this.fileName, "a") as WriteHandle;
  }

  write(message: string, store = true): void {
    if (store && this.file !== undefined) {
      this.file.write(message);
      this.file.flush();
    }

    const oldRedirect = term.current();

    term.redirect(this.redirect);
    write(message);
    term.redirect(oldRedirect);
  }

  print(message: string, store = true): void {
    this.write(message + "\n", store);
  }

  log(message: string, color: number = colors.white, tag: string = "L"): void {
    if (this.timestamp) {
      message = os.date(this.timestampFormat) + message;
    }

    const prevColor: number = this.redirect.getTextColor();

    this.redirect.setTextColor(color);

    if (this.tag) {
      this.print(`[${tag}]${message}`);
    } else {
      this.print(message);
    }

    this.redirect.setTextColor(prevColor);
  }

  debug(message: any, options?: { function_args?: boolean; function_source?: boolean }, ribbon_frac?: number): void {
    if (!this.showDebug) {
      return;
    }

    if (typeof message === "string") {
      this.log(message, colors.purple, "D");
    } else {
      pretty_print(message, options, ribbon_frac);
    }
  }

  info(message: string): void {
    this.log(message, colors.lightBlue, "I");
  }

  warn(message: string): void {
    this.log(message, colors.yellow, "W");
  }

  error(message: string): void {
    this.log(message, colors.red, "E");
  }

  tabulate(paged: boolean | number, ...data: (number | (string | Alignment)[])[]): void {
    const sizes: number[] = [];

    for (const row of data.filter((x) => Array.isArray(x)) as (string | Alignment)[][]) {
      let sizeIndex = 0;

      for (let i = 0; i < row.length; i++) {
        const col = row[i];

        if (typeof col === "string") {
          sizes[sizeIndex] = Math.max(col.length, sizes[i] ?? 0);
          sizeIndex++;
        }
      }
    }

    const [_, height] = this.redirect.getSize();
    let pageDelay = typeof paged === "number" ? paged : height - 1;

    for (const row of data) {
      switch (typeof row) {
        case "number":
          this.redirect.setTextColor(row);
          break;
        case "object":
          this._tabulateRow(sizes, row);
          pageDelay--;
          if (paged && pageDelay <= 0) {
            // todo move to method
            this.print("", false);

            this.write("Continue? [Y/n] ", false);
            const answer = read();

            if (answer.toLowerCase().trim() === "n") {
              return;
            }

            const [, y] = this.redirect.getCursorPos();
            this.redirect.setCursorPos(1, y - 1);

            this.redirect.clearLine();

            pageDelay = typeof paged === "number" ? paged : height - 1;
          } else {
            this.print("");
          }
          break;
      }
    }
  }

  _pad(count: number, char: string = " ") {
    for (let i = 0; i < count; i++) {
      this.write(char);
    }
  }

  _tabulateRow(sizes: number[], row: (string | symbol)[]) {
    let align = Alignments.LEFT;
    let index = 0;

    for (let i = 0; i < row.length; i++) {
      const col = row[i] ?? "";

      if (typeof col === "string") {
        const pad = sizes[index] - col.length;

        switch (align) {
          case Alignments.LEFT:
          default:
            this.write(col);
            this._pad(pad);
            break;
          case Alignments.CENTER:
            this._pad(Math.floor(pad / 2));
            this.write(col);
            this._pad(Math.ceil(pad / 2));
            break;
          case Alignments.RIGHT:
            this._pad(pad);
            this.write(col);
            break;
        }

        this.write(" ");

        index++;
      } else {
        align = col;
      }
    }
  }
}
