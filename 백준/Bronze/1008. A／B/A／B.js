const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(" ").map(Number);
console.log(a / b);
