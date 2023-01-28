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
  showDebug = true;

  constructor(timestamp: boolean = false, fileName?: string) {
    this.timestamp = timestamp;
    this.fileName = fileName;

    if (!fileName) {
      return;
    }

    this.file = fs.open(fileName, "a") as WriteHandle;
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

  _write(message: string): void {
    if (this.file !== undefined) {
      this.file.write(message);
      this.file.flush();
    }
  }

  _writeLine(message: string): void {
    if (this.file !== undefined) {
      this.file.writeLine(message);
      this.file.flush();
    }
  }

  log(message: string, color: number = colors.white, tag: string = "L"): void {
    if (this.timestamp) {
      message = os.date(this.timestampFormat) + message;
    }

    const prevColor: number = term.getTextColor();

    term.setTextColor(color);
    print(message);
    term.setTextColor(prevColor);
    this._writeLine(`[${tag}]${message}`);
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

    const [_, height] = term.getSize();
    let pageDelay = typeof paged === "number" ? paged : height - 1;

    for (const row of data) {
      switch (typeof row) {
        case "number":
          term.setTextColor(row);
          break;
        case "object":
          this._tabulateRow(sizes, row);
          pageDelay--;
          if (paged && pageDelay <= 0) {
            // todo move to method
            print("");

            write("Continue? [Y/n] ");
            const answer = read();

            if (answer.toLowerCase().trim() === "n") {
              return;
            }

            term.scroll(-2);
            print("");

            pageDelay = typeof paged === "number" ? paged : height - 1;
          } else {
            print("");
            this._writeLine("");
          }
          break;
      }
    }
  }

  _pad(count: number, char: string = " ") {
    for (let i = 0; i < count; i++) {
      write(char);
      this._write(char);
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
            write(col);
            this._write(col);
            this._pad(pad);
            break;
          case Alignments.CENTER:
            this._pad(Math.floor(pad / 2));
            write(col);
            this._write(col);
            this._pad(Math.ceil(pad / 2));
            break;
          case Alignments.RIGHT:
            this._write(col);
            this._pad(pad);
            write(col);
            break;
        }

        write(" ");

        index++;
      } else {
        align = col;
      }
    }
  }
}
