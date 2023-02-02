const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b, c] = input.split("\n").map(Number);

const sum =
  9 * 1 +
  7 * 3 +
  8 * 1 +
  0 * 3 +
  9 * 1 +
  2 * 3 +
  1 * 1 +
  4 * 3 +
  1 * 1 +
  8 * 3 +
  a * 1 +
  b * 3 +
  c * 1;
console.log(`The 1-3-sum is ${sum}`);