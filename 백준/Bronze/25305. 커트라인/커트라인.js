const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [line1, line2] = input.split("\n");
const k = line1.split(" ")[1];
let scores = line2.split(" ").map(Number);

scores = scores.sort((a, b) => b - a);
console.log(scores[k - 1]);
