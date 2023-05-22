const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [n1, k1, n2, k2] = input.split(" ").map(Number);
console.log(n1 * k1 + n2 * k2);
