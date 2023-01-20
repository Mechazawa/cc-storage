export interface Job {
  method: string;
  params: (string | number | boolean)[];
}

export default class Queue {
  readonly MAX_SIZE = 512;
  queue: Job[] = [];
  file: BinaryWriteHandle;
  fileName: string;

  constructor(fileName: string) {
    this.file = fs.open(fileName, "wb") as BinaryWriteHandle;
    this.fileName = fileName;

    this.restore();
  }

  save() {}

  restore() {}

  push(job: Job): boolean {
    if (this.queue.length < this.MAX_SIZE) {
      this.queue.push(job);
      return true;
    }

    return false;
  }
}
