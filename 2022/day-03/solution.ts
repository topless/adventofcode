import { readFileSync } from "fs";

const file = readFileSync("./day-03/input.txt", "utf-8");
const lines = file.split("\n");

const splitCompartments = (inp: string): [string, string] => [
  inp.substring(0, inp.length / 2),
  inp.substring(inp.length / 2, inp.length),
];

const findCommonChar = (compA: string, compB: string): string => {
  for (let c of compA.split("")) {
    if (compB.includes(c)) return c;
  }

  return "";
};

/**
 * charCodes
 * a-z: 97 - 122
 * A-Z: 65 - 90
 *
 * priorities
 * a-z: 1-26
 * A-Z: 27-52
 */
const getPriority = (str: string): number => {
  const charCode = str.charCodeAt(0);

  if (97 <= charCode && charCode <= 122) return charCode - 96;
  if (65 <= charCode && charCode <= 90) return charCode - 38;

  return Number.MIN_VALUE;
};

const main = () =>
  lines.reduce((acc, line) => {
    const [compA, compB] = splitCompartments(line);
    const common = findCommonChar(compA, compB);
    const priority = getPriority(common);

    return acc + priority;
  }, 0);

console.log("The result is: ", main());
