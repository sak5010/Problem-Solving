const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n").map(Number);

const t = input.shift();
const cases = input;

const result = cases.map((num) => Math.pow(num, 2));
console.log(result.join("\n"));
