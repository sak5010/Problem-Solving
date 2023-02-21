const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 한 명 한 명 includes로 검사한다.
// 2. 있으면 1번부터 결과 콘솔에 공백 구분으로 넣음.
// 3. 하나도 없으면 문장 출력 있으면 콘솔 공백 넣은거 출력
input = input.split("\n");
const result = [];
input.forEach((name, idx) => {
  if (name.includes("FBI")) {
    result.push(idx + 1);
  }
});

if (result.length === 0) console.log("HE GOT AWAY!");
else console.log(result.join(" "));
