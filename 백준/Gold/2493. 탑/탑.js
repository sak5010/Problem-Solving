"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const n = Number(input.shift());
const tops = input[0].split(" ").map(Number);
const obj = {};

for (let i = 1; i <= tops.length; i++) {
  obj[tops[i - 1]] = i;
}

const stack = [];
const result = [];

tops.reverse();
stack.push(tops.pop());
result.push(0);

while (tops.length !== 0) {
  const t = tops.pop();
  if (stack.length === 0) {
    stack.push(t);
    result.push(0);
  } else if (stack[stack.length - 1] > t) {
    result.push(obj[stack[stack.length - 1]]);
    stack.push(t);
  } else {
    while (stack.length !== 0 && stack[stack.length - 1] <= t) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(0);
    } else {
      result.push(obj[stack[stack.length - 1]]);
    }
    stack.push(t);
  }
}
console.log(result.join(" "));
