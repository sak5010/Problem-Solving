const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n").map(Number);

let n = input.shift();
const sequence = input.reverse();
const stack = [];

const result = [];
let cnt = 1;
while (n--) {
  const t = sequence.pop();
  while (cnt <= t) {
    stack.push(cnt++);
    result.push("+");
  }
  if (stack[stack.length - 1] === t) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}
console.log(result.join("\n"));
