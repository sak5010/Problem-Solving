const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 10;

input = input.split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const ns = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr = new Array(MAX_LENGTH).fill(0);
const isUsed = [...ns];

const consoleResult = [];

const func = (k) => {
  if (k === m) {
    const consoleSpace = [];
    for (let i = 0; i < m; i++) {
      consoleSpace.push(arr[i]);
    }
    consoleResult.push(consoleSpace.join(" "));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isUsed[i] !== 0) {
      arr[k] = ns[i];
      const temp = isUsed[i];
      isUsed[i] = 0;
      func(k + 1);
      isUsed[i] = temp;
    }
  }
};

func(0);
const consoleResultSet = new Set(consoleResult);
console.log(Array.from(consoleResultSet).join("\n"));
