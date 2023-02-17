'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
input.shift();

let array = input.map((item) => {
  const [x, y] = item.split(' ').map(Number);
  return [x, y];
});

array = array.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let resultConsole = "";
array.forEach((item) => {
  resultConsole += `${item[0]} ${item[1]}\n`
});

console.log(resultConsole);