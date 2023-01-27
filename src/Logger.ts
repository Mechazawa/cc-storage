import { pretty_print } from "cc.pretty";

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

    const fileName = (x: number) => `${this.fileName}.${x}`

    for(let i = keep; i > 0; i--) {
      if (fs.exists(fileName(i))) {
        fs.move(fileName(i), fileName(i + 1))
      }
    }

    if (fs.exists(fileName(keep + 1))){
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
}
