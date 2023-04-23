const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. ZR, ZC를 보관한다. ZR은 각 줄의 배수이고, ZC는 각 문자의 배수이다.
// 2. 둘째 줄 부터 마지막 줄 까지 '\n'으로 구분하여 배열 newspaper에 저장한다.
// 3. newspaper의 원소 하나에서 .이나 x로 이루어진 문자 하나 하나를 살펴보며 ZC만큼 곱해서 한 줄을 만든다.
// 4. 3번의 한 줄을 만들었으면 ZR을 보고 그만큼 곱해서 '\n'으로 구분하여 result 배열에 쌓는다.
// 5. result 배열 출력.
const newspaper = input.split("\n");
const firstLine = newspaper.shift();
const ZR = firstLine.split(" ")[2];
const ZC = firstLine.split(" ")[3];

const result = [];
newspaper.forEach((newspaperLine) => {
  let line = "";
  newspaperLine.split("").forEach((c) => {
    line += c.repeat(ZC);
  });
  for (let i = 0; i < ZR; i++) result.push(line);
});

console.log(result.join("\n"));
