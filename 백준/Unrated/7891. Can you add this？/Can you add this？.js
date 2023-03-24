"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

let resultConsole = "";
input.forEach((cal) => {
  const [x, y] = cal.split(" ").map(Number);
  resultConsole += x + y + "\n";
});
console.log(resultConsole);
