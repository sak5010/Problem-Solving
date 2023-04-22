const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const N = Number(input.shift());
const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += A[i] * B[i];
}
console.log(sum);
return sum;
