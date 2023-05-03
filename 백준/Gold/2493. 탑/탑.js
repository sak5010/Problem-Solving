const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
let n = Number(input.shift());
const tops = input[0].split(" ").map(Number);
// 1. 탑들의 높이를 1부터 계산해서 key(높이)-value(1~N)로 obj에 저장한다. v
// 2. stack에 맨 앞의 탑을 넣고 result 배열에 0을 넣어 놓는다. v
// 3. 두번째 탑 부터 stack의 top과 비교해 크다면 stack을 pop 한다. stack이 비어있으면 result에 0을 넣고
//    비어있지 않으면 stack의 top을 key로 하는 value를 result에 는다. 이후 탑을 stack에 push 한다.
//    stack의 top과 비교해 작다면 stack의 top을 key로 하는 value를 result에 넣고 탑을 push 한다. v
// 4. result배열을 형식에 맞게 출력.
const obj = {};
for (let i = 1; i <= n; i++) {
  obj[tops[i - 1]] = i;
}

tops.reverse();
const stack = [];
const result = [];
stack.push(tops.pop());
result.push(0);

while (tops.length !== 0) {
  const top = tops.pop();
  if (top > stack[stack.length - 1]) {
    while (true) {
      stack.pop();
      if (stack.length === 0) {
        result.push(0);
        break;
      } else {
        if (stack[stack.length - 1] > top) {
          result.push(obj[stack[stack.length - 1]]);
          break;
        }
      }
    }
  } else {
    result.push(obj[stack[stack.length - 1]]);
  }
  stack.push(top);
}

console.log(result.join(" "));
