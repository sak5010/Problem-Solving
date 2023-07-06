const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

const n = Number(input.shift());
const waters = input[0].split(" ").map(Number);

waters.sort((a, b) => a - b);

let start = 0;
let end = waters.length - 1;
let alkali, acid;
let minMix = Number.MAX_VALUE;

while (start < end) {
  if (Math.abs(waters[start] + waters[end]) < Math.abs(minMix)) {
    alkali = waters[start];
    acid = waters[end];
    minMix = waters[start] + waters[end];
  }
  if (minMix === 0) break;
  waters[start] + waters[end] > 0 ? end-- : start++;
}
console.log(alkali, acid);
