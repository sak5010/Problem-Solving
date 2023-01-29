'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ').map(Number);

let sum;
if (b > a)
  sum = (b-a+1) * (a+b) / 2;
else 
  sum = (a-b+1) * (b+a) / 2;

console.log(sum);