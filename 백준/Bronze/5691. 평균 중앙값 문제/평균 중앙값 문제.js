"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();

const result = input.map((line) => {
  const [a, b] = line.split(" ").map(Number);
  return 2 * a - b;
});

console.log(result.join("\n"));
