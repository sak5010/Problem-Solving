const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();
const result = [];
input.forEach((binary) => {
  const digit = parseInt(binary, 2);
  result.push(digit);
});

console.log(result.join("\n"));
