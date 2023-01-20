'use strict';

const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 맨 처음 공의 포지션은 1이다.
// 입력 받는 두 수 중 공의 포지션과 일치하는 녀석이 있으면 짝이 되는 수로 공의 포지션을 옮긴다.
// 끝까지 이 과정을 반복하고, 공의 포지션을 출력하면 된다.

input = input.split('\n');
input.shift();
let positionBall = 1;
input.map((val) => {
  const [leftCup, rightCup] = val.split(' ').map(Number);
  if (leftCup === positionBall) {
    positionBall = rightCup;
  } else if (rightCup === positionBall) {
    positionBall = leftCup;
  }
});
console.log(positionBall);