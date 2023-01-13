const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const CHESS_MEN = [1, 1, 2, 2, 2, 8];

console.log(
  input.split(' ')
  .map((n) => Number(n))
  .map((n, i) => CHESS_MEN[i] - n)
  .join(' ')
);