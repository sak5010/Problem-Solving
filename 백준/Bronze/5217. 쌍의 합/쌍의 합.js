'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. a,b 쌍을 찾는데 항상 a < b.
// 2. a는 1부터, b는 n-1부터 시작한다. a는++ b는--
// 3. 쌍을 찾으면 배열에 [a b] string 형식으로 넣는다.
// 4. 한 줄 끝나면 Pairs for n: 에 [a b] 배열의 원소들을 ', '로 join하여 넣는다.
input = input.split('\n').map(Number);
input.shift();
let resultConsole = "";
input.forEach((n) => {
  let [a, b] = [1, n-1];
  const resultArray = [];
  while (a < b) {
    resultArray.push(`${a} ${b}`);
    a++;
    b--;
  }
  resultConsole += `Pairs for ${n}: ${resultArray.join(', ')}\n`;
});
console.log(resultConsole);