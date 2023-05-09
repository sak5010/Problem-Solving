const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();
// 1. 26개의 원소를 가진 arr에 0으로 채운다.
// 2. 각 테스트 케이스 문장들을 문자 하나 하나 확인하면서 아스키코드로 변환해 (a-0, b-1, ...) arr[a를인덱스0으로]에 1을 증가시켜 저장한다.
// 3. arr를 돌면서 0이 있으면 N, 0이 하나도 없으면 Y를 resultConsole에 집어 넣는다. 마지막에 출력.
const result = [];
input.forEach((str) => {
  const arr = new Array(26).fill(0);
  str.split("").forEach((char) => {
    arr[char.charCodeAt(0) - 97] += 1;
  });
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      result.push("N");
      break;
    }
  }
  if (i === arr.length) result.push("Y");
});
console.log(result.join("\n"));
