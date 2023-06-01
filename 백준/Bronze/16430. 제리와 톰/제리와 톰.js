const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [A, B] = input.split(" ").map(Number);

console.log(`${B - A} ${B}`);
