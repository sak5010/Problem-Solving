const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().trim();
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input
  .split("\n")
  .map((line) => line.split(" ").map((val) => Number(val)));

let maxValue = 0;
let maxIndex = 0;
input.forEach((player, idx) => {
  const pointSum = player.reduce((acc, cur) => acc + cur);
  if (pointSum > maxValue) {
    maxValue = pointSum;
    maxIndex = idx + 1;
  }
});

console.log(maxIndex, maxValue);
