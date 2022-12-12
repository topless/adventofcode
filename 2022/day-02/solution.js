import { readFileSync } from "fs";

// Theser are the mappings to the play numbers
// ["rock", "paper", "scissors"]

const opponent = ["A", "B", "C"];
const mine = ["X", "Y", "Z"];

const resultScore = {
  lost: 0,
  draw: 3,
  win: 6,
};

const file = readFileSync("./day-02/input.txt", "utf-8");
const lines = file.split("\n");

let total1 = 0;
let total2 = 0;

const part1 = (myPlay, oppPlay) => {
  if (myPlay === oppPlay) {
    total1 += myPlay + 1 + resultScore.draw;
    return;
  }

  if (myPlay - 1 === oppPlay || (myPlay === 0 && oppPlay === 2)) {
    total1 += myPlay + 1 + resultScore.win;
    return;
  }

  if (myPlay + 1 === oppPlay || (myPlay === 2 && oppPlay === 0)) {
    total1 += myPlay + 1;
  }
};

const part2 = (oppPlay, result) => {
  if (result === 0) {
    const myPlay = oppPlay === 0 ? 2 : oppPlay - 1;
    total2 += myPlay + 1;
    return;
  }

  if (result === 1) {
    total2 += oppPlay + 1 + resultScore.draw;
    return;
  }

  if (result === 2) {
    const myPlay = oppPlay === 2 ? 0 : oppPlay + 1;

    total2 += myPlay + 1 + resultScore.win;
    return;
  }
};

for (let line of lines) {
  const [firstInput, secInput] = line.split(" ");
  const oppPlay = opponent.indexOf(firstInput);
  const myPlay = mine.indexOf(secInput);

  // part1(oppPlay, myPlay);
  part2(oppPlay, myPlay);
}

console.log(total2);
