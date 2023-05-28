"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

const result = input.map((line, idx) => `${idx + 1}. ${line}`);
console.log(result.join("\n"));
