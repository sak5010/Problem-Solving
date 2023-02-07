const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

let max = 0;
input.forEach((line) => {
  const [a, b, c, d] = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a === b && b === c && c === d) max = Math.max(max, 50000 + a * 5000);
  else if ((a === b && b === c) || (b === c && c === d))
    max = Math.max(max, 10000 + b * 1000);
  else if (a === b && c === d) max = Math.max(max, 2000 + a * 500 + c * 500);
  else if (a === b || b === c) max = Math.max(max, 1000 + b * 100);
  else if (c === d) max = Math.max(max, 1000 + c * 100);
  else if (a !== b && b !== c && c !== d) max = Math.max(max, d * 100);
});
console.log(max);
