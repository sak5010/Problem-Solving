"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 9;

const [n, m] = input.split(" ").map(Number);
const arr = new Array(MAX_LENGTH).fill(0);

const resultConsole = [];
const func = (k) => {
  const consoleSpace = [];
  if (k === m) {
    for (let i = 0; i < m; i++) {
      consoleSpace.push(arr[i]);
    }
    resultConsole.push(consoleSpace.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    arr[k] = i;
    func(k + 1);
  }
};

func(0);
console.log(resultConsole.join("\n"));
