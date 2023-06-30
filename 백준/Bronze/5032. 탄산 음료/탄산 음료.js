"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [e, f, c] = input.split(" ").map(Number);

let quotient = e + f;
let result = 0;
while (Math.floor(quotient / c) >= 1) {
  result += Math.floor(quotient / c);
  quotient = Math.floor(quotient / c) + (quotient % c);
}
console.log(result);
