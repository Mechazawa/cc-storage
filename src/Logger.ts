export default class Logger {
  timestampFormat: string = "[%H:%M:%S] ";
  file?: WriteHandle;
  timestamp: boolean;
  showDebug = true;

  constructor(timestamp: boolean = false, fileName?: string) {
    if (fileName) {
      this.file = fs.open(fileName, "a") as WriteHandle;
    }

    this.timestamp = timestamp;
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

  debug(message: string): void {
    if (this.showDebug) {
      this.log(message, colors.purple, "D");
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
