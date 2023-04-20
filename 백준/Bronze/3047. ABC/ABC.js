const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 첫 번째 줄을 정렬 시켜 배열에 저장한다. [1, 3, 5]
// 2. 1번 배열을 순회하면서 각각의 원소를 value로 하여 객체에 알파벳 순서대로 key로 저장한다.
//    obj = { A: 1, B: 3, C: 5 }
// 3. 두 번째 줄을 하나씩 순회하여 obj를 참조 후 출력한다.
input = input.split("\n");
let [numbers, alphabets] = input;
numbers = numbers
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
alphabets = alphabets.split("");

const obj = {};
numbers.forEach((number, index) => {
  obj[String.fromCharCode("A".charCodeAt(0) + index)] = number; // 인덱스 부분에 'A' + index를 써서 자동으로 A, B, C 들어가게...
});

const result = [];
alphabets.forEach((alphabet) => {
  result.push(obj[alphabet]);
});

console.log(result.join(" "));
