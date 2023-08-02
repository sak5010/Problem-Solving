const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();
const testCase = input.map(Number);

const func = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  return func(n - 1) + func(n - 2) + func(n - 3);
};

const result = testCase.map((t) => func(t));

console.log(result.join("\n"));
