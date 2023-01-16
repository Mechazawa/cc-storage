export default class Logger {
    timestampFormat: string = "[%d-%m %H:%M:%S] ";
    file?: WriteHandle;
    timestamp: boolean;

    constructor(timestamp: boolean = false, fileName?: string) {
        if (fileName) {
            this.file = fs.open(fileName, 'a') as WriteHandle;
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

    log(message: string): void {
        if (this.timestamp) {
            message = os.date(this.timestampFormat) + message;
        }

        print(message);
        this._writeLine(message);
    }
}