'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 각 인원이 받은 점수를 max와 비교해서 계속 갱신하고, 마지막 max를  출력.
// 1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
input = input.split('\n');
const people = input.slice(1);
let max = 0;
people.forEach((points) => {
  const threePoints = points.split(' ').map(Number);
  threePoints.sort((a, b) => a - b);
  let point = 0;
  const [one, two, three] = threePoints;
  if (one === two && two === three)
    point = 10000 + one * 1000;
  else if (one === two || two === three)
    point = 1000 + two * 100;
  else
    point = three * 100;
  max = point > max ? point : max;
});

console.log(max);