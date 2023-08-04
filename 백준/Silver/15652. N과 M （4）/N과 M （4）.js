"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 10;

const [n, m] = input.split(" ").map(Number);
const arr = new Array(MAX_LENGTH).fill(0);

const isAscending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const resultConsole = [];

const func = (k) => {
  if (k === m) {
    const consoleLine = [];
    for (let i = 0; i < m; i++) {
      consoleLine.push(arr[i]);
    }
    if (isAscending(consoleLine)) {
      resultConsole.push(consoleLine.join(" "));
    }
    return;
  }
  for (let i = 1; i <= n; i++) {
    arr[k] = i;
    func(k + 1);
  }
};

func(0);
console.log(resultConsole.join("\n"));
