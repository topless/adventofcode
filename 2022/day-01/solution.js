import { readFileSync } from "fs";

const file = readFileSync("./day-01/input.txt", "utf-8");
const lines = file.split("\n");

let sums = [];
let current = 0;

for (let line of lines) {
  if (parseInt(line) > 0) {
    current += parseInt(line);
  } else {
    sums.push(current);
    current = 0;
  }
}

sums.sort().reverse();

console.log(sums[0] + sums[1] + sums[2]);
