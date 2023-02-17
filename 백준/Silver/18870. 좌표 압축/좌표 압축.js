'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. origin 배열을 두고 새로운 sorted 배열을 만든다.
// 2. sorted된 배열의 원소들에 따라 rankObject에 랭크를 매긴다. 0등~...
// 3. origin 배열을 하나씩 순회하며 rankObject에서 순위를 확인해서 결과 배열에 순서대로 넣는다.
// 4. 결과 배열을 출력한다.
input = input.split('\n');
input.shift();

const origin = input[0].split(' ').map(Number);
const sorted = [...origin].sort((a,b) => a-b);

const rankObject = {};
let rank = 0;
for (let i = 0; i < sorted.length; i++) {
  if (!(sorted[i] in rankObject))
    rankObject[sorted[i]] = rank++;
}

const result = [];
origin.forEach((num) => {
  result.push(rankObject[num]);
});

let resultConsole = result.reduce((acc, cur) => acc + cur + ' ', "");
console.log(resultConsole);