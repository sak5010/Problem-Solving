const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 물이 세는 곳을 나타내는 배열을 만든다. (원소 1000개) v
// 2. 물이 세는 곳을 인덱스로 참조해 1번 배열에 1로 넣는다. v
// 3. 배열을 순회하면서 1을 만날 경우 L만큼 0으로 초기화 하고 result를 1 증가시킨다. v
// 4. result 반환
input = input.split("\n");
const L = Number(input.shift().split(" ")[1]);
const waterPosition = input[0].split(" ").map(Number);
const pipeLine = new Array(1000).fill(0);

waterPosition.forEach((p) => {
  pipeLine[p] = 1;
});

let result = 0;
pipeLine.forEach((pipe, index) => {
  if (pipe === 1) {
    for (let i = index; i < index + L; i++) pipeLine[i] = 0;
    result++;
  }
});
console.log(result);
