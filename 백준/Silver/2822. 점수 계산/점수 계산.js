'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const original = input.split('\n').map(Number);
const sorted = [...original].sort((a, b) => b - a);

const originalObj = {};
original.forEach((num, idx) => {
  originalObj[num] = idx + 1;
});

const resultIndexes = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += sorted[i];
  resultIndexes.push(originalObj[sorted[i]]);
}

console.log(sum);
console.log(resultIndexes.sort().join(' '));