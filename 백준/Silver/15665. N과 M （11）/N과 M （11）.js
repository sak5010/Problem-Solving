const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 9;

input = input.split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const ns = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr = new Array(MAX_LENGTH).fill(0);

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
    arr[k] = ns[i];
    func(k + 1);
  }
};

func(0);
const tempSet = new Set(consoleResult);
console.log(Array.from(tempSet).join("\n"));
