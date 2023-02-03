const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// Frequency Counter Pattern
// 1. N개의 숫자를 객체에 넣는다. 없으면 1로 초기화 있으면 1 더함.
// 2. M개의 숫자 원소 하나씩 1번 객체에 있는지 확인한다.
//    없으면 0이고 있으면 해당 value를 resultConsole에 쌓는다. (공백 구분)
// 3. 마지막에 출력
const [a, N, b, M] = input.split("\n");
const Narr = N.split(" ").map(Number);
const Marr = M.split(" ").map(Number);

const Nobj = {};
Narr.forEach((num) => {
  Nobj[num] = (Nobj[num] || 0) + 1;
});

let resultConsole = "";
Marr.forEach((num) => {
  num in Nobj ? (resultConsole += Nobj[num]) : (resultConsole += 0);
  resultConsole += " ";
});

console.log(resultConsole);
