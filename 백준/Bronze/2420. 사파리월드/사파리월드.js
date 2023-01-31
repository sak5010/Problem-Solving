const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(" ").map(Number);

console.log(Math.abs(n - m));
