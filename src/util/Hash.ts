function shiftL(value: number, count: number): number {
  return value * 2 ** count;
}

function shiftR(value: number, count: number): number {
  return Math.floor(value / 2 ** count);
}

function xor(a: number, b: number): number {
  let output = 0;
  let sA = a.toString(2);
  let sB = b.toString(2);
  const maxLength = Math.max(sA.length, sB.length);

  while (sA.length < maxLength) sA = "0" + sA;
  while (sB.length < maxLength) sB = "0" + sB;

  for (let i = 0; i < maxLength; i++) {
    if (sA[i] !== sB[i]) {
      output += 2 ** (maxLength - i - 1);
    }
  }

  return output;
}

export default class Hash {
  static readonly FNV1_32A_INIT = 0x811c9dc5;
  static readonly FNV1_32A_MASK = 0xffffffff;

  /**
   * Fast hash function for non-cryptographic use
   * @param str Input to be hashed
   * @returns String representation of the hash
   */
  static fnv32b(str: string): string {
    let hash = str
      .split("")
      .map((x) => x.charCodeAt(0))
      .reduce((sum, val) => {
        sum = xor(sum, val);

        sum += shiftL(sum, 1) + shiftL(sum, 4) + shiftL(sum, 7) + shiftL(sum, 8) + shiftL(sum, 24);

        return sum % this.FNV1_32A_MASK;
      }, this.FNV1_32A_INIT);

    return hash.toString(16);
  }
}
