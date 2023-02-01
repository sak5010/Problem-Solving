const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const factorial = (num) => {
  if (num < 2) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(n));
