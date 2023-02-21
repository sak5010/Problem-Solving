const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. start를 끝 직전 원소까지 반복.
// 2. left, right포인터를 두고 비교해서 증가하는 중인지 확인. 처음엔 left는 start위치. right는 바로 오른쪽 1칸.
//    증가하는 중이라면 start와 right 차이를 asc에 저장하고 max값 갱신.
//    left, right 포인터 증가.
//    같거나 감소하는 중이라면 start를 right포인터로 옮기고
//    left, right 포인터 증가.
// 3. max값 출력.
input = input.split("\n");
input.shift();

const roads = input[0].split(" ").map(Number);
let start = 0;
let left = 0;
let right = 1;
let asc = 0;
let max = 0;
while (start < roads.length - 1) {
  if (roads[left] < roads[right]) {
    asc = roads[right] - roads[start];
    max = Math.max(max, asc);
  } else {
    start = right;
  }
  left++;
  right++;
}
console.log(max);
