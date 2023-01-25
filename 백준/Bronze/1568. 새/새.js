'use strict';

const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let natureNumber = 1;
let count = 0;
while (N !== 0) {
  if (N - natureNumber >= 0) {
    N -= natureNumber++;
    count++;
  } else {
    natureNumber = 1;
  }
}
console.log(count);