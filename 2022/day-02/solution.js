import { readFileSync } from "fs";

// ["rock", "paper", "scissors"]

const opponent = ["A", "B", "C"];
const mine = ["X", "Y", "Z"];

const roundScore = {
  lost: 0,
  draw: 3,
  win: 6,
};

const file = readFileSync("./day-02/input.txt", "utf-8");
const lines = file.split("\n");
let total = 0;

for (let line of lines) {
  const [oppMove, myMove] = line.split(" ");
  const oppPlay = opponent.indexOf(oppMove);
  const myPlay = mine.indexOf(myMove);

  if (myPlay === oppPlay) {
    total += myPlay + 1 + roundScore.draw;
    continue;
  }

  if (myPlay - 1 === oppPlay || (myPlay === 0 && oppPlay === 2)) {
    total += myPlay + 1 + roundScore.win;
    continue;
  }

  if (myPlay + 1 === oppPlay || (myPlay === 2 && oppPlay === 0)) {
    total += myPlay + 1;
  }
}

console.log(total);
