const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

const sets = new Set(input[0].split(" ").map(Number));

const numbers = [...sets].sort((a, b) => a - b);

console.log(numbers.join(" "));
