'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 몫과 나머지가 같으려면 N이 3일 경우
// 3*1 + 1, 3*2 + 2 경우가 있다. 
// 이 때 나머지는 3보다 작을 수 밖에 없으므로 몫도 3보다 작은 경우만 계산.
// 즉, 1 <= i <= N-1 로, N*i + i를 해주면 된다.
const N = Number(input);
let sum = BigInt(0);
for (let i = 1; i < N; i++) {
  sum += BigInt(N * i + i);
}
console.log(sum.toString());