"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const MAX_LENGTH = 10;
const MAX_N = 100001;

const [n, m] = input.shift().split(" ").map(Number);
const ns = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr = new Array(MAX_LENGTH).fill(0);
const isUsed = new Array(MAX_N).fill(0);

const consoleResult = [];

const isAscending = (arr) => {
  for (let i = 0; i < m - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const func = (k) => {
  const consoleLine = [];
  if (k === m) {
    if (isAscending(arr)) {
      for (let i = 0; i < m; i++) {
        consoleLine.push(arr[i]);
      }
      consoleResult.push(consoleLine.join(" "));
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isUsed[ns[i]] === 0) {
      arr[k] = ns[i];
      isUsed[ns[i]] = 1;
      func(k + 1);
      isUsed[ns[i]] = 0;
    }
  }
};

func(0);
console.log(consoleResult.join("\n"));
