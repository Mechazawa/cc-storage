export function lpad(input: string, size: number, char: string = " ") {
  while (input.length < size) {
    input = char + input;
  }

  return input;
}

export function rpad(input: string, size: number, char: string = " ") {
  while (input.length < size) {
    input += char;
  }

  return input;
}

export function ellipsis(input: string, maxLength: number, end = "...") {
  if (input.length < maxLength) {
    return input;
  }

  return input.substring(0, maxLength - end.length) + end;
}
