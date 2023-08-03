const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 10;

const [n, m] = input.split(" ").map(Number);
const arr = new Array(MAX_LENGTH).fill(0);
const isUsed = new Array(MAX_LENGTH).fill(0);
const resultConsole = [];

const isAscending = (arr) => {
  const arr2 = [...arr];
  arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) return false;
  }
  return true;
};

const func = (k) => {
  if (k === m) {
    const consoleSpace = [];
    for (let i = 0; i < m; i++) {
      consoleSpace.push(arr[i]);
    }
    if (isAscending(consoleSpace)) resultConsole.push(consoleSpace);
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (isUsed[i] === 0) {
      arr[k] = i;
      isUsed[i] = 1;
      func(k + 1);
      isUsed[i] = 0;
    }
  }
};

func(0);
console.log(resultConsole.map((line) => line.join(" ")).join("\n"));
