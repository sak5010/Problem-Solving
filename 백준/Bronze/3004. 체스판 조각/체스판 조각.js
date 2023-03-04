'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
// n이 1이면 2.
// n이 2부터 2에 add값 2를 더함.
// add값을 2번 더했으면 add값이 1 증가.
let result = 2;
let add = 2;
let addPlusFlag = 0; // 2가되면 0으로 초기화, add 1 증가
for (let i = 2; i <= n; i++) {
  if (addPlusFlag === 2) {
    addPlusFlag = 1;
    add++;
  } else {
    addPlusFlag++;
  }
  result += add;
}
console.log(result);