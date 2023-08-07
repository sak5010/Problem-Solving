const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

const MAX_LENGTH = 10;

const [n, m] = input.shift().split(" ").map(Number);
const ns = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr = new Array(MAX_LENGTH).fill(0);

const isAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const consoleResult = [];

const func = (k) => {
  const consoleSpace = [];
  if (k === m) {
    for (let i = 0; i < m; i++) {
      consoleSpace.push(arr[i]);
    }
    if (isAscending(consoleSpace)) consoleResult.push(consoleSpace.join(" "));
    return;
  }
  for (let i = 0; i < n; i++) {
    arr[k] = ns[i];
    func(k + 1);
  }
};

func(0);
console.log(consoleResult.join("\n"));
