export default class ExpiringLock {
  expires: number = 0;

  get locked(): boolean {
    switch (this.expires) {
      case 0:
        return false;
      case -1:
        return true;
    }

    if (this.expires <= os.epoch("utc")) {
      this.expires = 0;
      return false;
    }

    return true;
  }

  lock(seconds?: number): boolean {
    if (this.locked) {
      return false;
    }

    if (seconds === undefined) {
      this.expires = -1;
    } else {
      this.expires = os.epoch("utc") + seconds * 1000;
    }

    return true;
  }

  unlock(): boolean {
    this.expires = 0;

    return true;
  }
}
