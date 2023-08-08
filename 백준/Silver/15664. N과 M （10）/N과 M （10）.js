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
const isUsed = [...ns];

const resultConsole = [];

const isAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const func = (k) => {
  const resultSpace = [];
  if (k === m) {
    for (let i = 0; i < m; i++) {
      resultSpace.push(arr[i]);
    }
    if (isAscending(resultSpace)) resultConsole.push(resultSpace.join(" "));
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
const tempSet = new Set(resultConsole);
console.log(Array.from(tempSet).join("\n"));
