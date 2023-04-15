"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const numbers = input.map(Number);
numbers.sort((a, b) => a - b);

// 1. start = 0, end = 0부터 시작하여 start가 N보다 작고 end가 N보다 작을 때 까지 반복한다.
// 2. end - start < M 이면 end를 1 증가시킨다.
// 3. end - start >= M 이면 end - start의 최솟값을 갱신한다. 이후 start를 1 증가시킨다.
let start = 0;
let end = 0;
let min = Infinity;
while (start < N && end < N) {
  const diff = numbers[end] - numbers[start];
  if (diff < M) {
    end++;
  } else {
    min = Math.min(min, diff);
    start++;
  }
}
console.log(min);
