"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

const K = input.shift().split(" ").map(Number)[1];
const field = Array.from({ length: 4000004 }, () => 0);

let maxX = -1;
input.forEach((line) => {
  const [g, x] = line.split(" ").map(Number);
  field[x] = g;
  maxX = Math.max(maxX, x);
});

let windowSum = 0;
for (let i = 0; i < K * 2 + 1; i++) {
  windowSum += field[i];
}

let maxWindowSum = windowSum;
for (let i = 0; i < maxX - K * 2; i++) {
  windowSum += field[K * 2 + 1 + i];
  windowSum -= field[i];
  maxWindowSum = Math.max(maxWindowSum, windowSum);
}

console.log(maxWindowSum);
