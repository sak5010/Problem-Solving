'use strict';
const { channel } = require('diagnostics_channel');
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
input.pop();

const changeChar = (char) => {
  switch (char) {
    case '-':
      return 0;
    case '\\':
      return 1;
    case '(':
      return 2;
    case '@':
      return 3;
    case '?':
      return 4;
    case '>':
      return 5;
    case '&':
      return 6;
    case '%':
      return 7;
    case '/':
      return -1;
  }
}

// 1. line의 각 문자 하나 하나를 넣었을때 대응하는 수로 바꿔주는 함수 작성
// 2. 1번에서 만든 함수에 각 수를 넣고 오른쪽 수 부터 *1, *8, *8^2, ... 적용
// 3. 그 합들을 '\n' 기준으로 result string에 넣고 출력.
let result = '';
input.forEach((line) => {
  let sum = 0;
  let jinsu = 1;
  const reversedLine = line.split('').reverse();
  reversedLine.forEach((c) => {
    const changedNum = changeChar(c);
    sum += changedNum * jinsu;
    jinsu *= 8;
  });
  result += sum + '\n';
});

console.log(result);