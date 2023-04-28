const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

let n = Number(input.shift());
const sequence = input.map(Number).reverse();
const stack = [];
// push할 때는 '+'를 예제 출력 배열에 넣는다. pop 할 때는 '-'를 출력 배열에 넣는다.
const result = [];

let cnt = 1;
while (n--) {
  let t = sequence.pop();
  while (cnt <= t) {
    stack.push(cnt++);
    result.push("+");
  }
  if (t === stack[stack.length - 1]) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}
console.log(result.join("\n"));
