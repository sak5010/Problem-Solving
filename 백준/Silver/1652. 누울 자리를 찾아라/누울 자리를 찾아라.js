'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
const n = Number(input.shift());
input = input.map((line) => line.split(''));

const inputInstance1 = input.map((line) => [...line]);
const inputInstance2 = input.map((line) => [...line]);

let horizontal = 0;
let vertical = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n-1; j++) {
    if (inputInstance1[i][j] === '.' && inputInstance1[i][j+1] === '.') {
      horizontal++;
      for (let k = j; k < n-1; k++) {
        if (inputInstance1[i][k] === 'X') {
          break;
        }
        inputInstance1[i][k] = 'X';
      }
    }
  }
}
for (let j = 0; j < n; j++) {
  for (let i = 0; i < n-1; i++) {
    if (inputInstance2[i][j] === '.' && inputInstance2[i+1][j] === '.') {
      vertical++;
      for (let k = i; k < n-1; k++) {
        if (inputInstance2[k][j] === 'X') {
          break;
        }
        inputInstance2[k][j] = 'X';
      }
    }
  }
}
console.log(horizontal, vertical);