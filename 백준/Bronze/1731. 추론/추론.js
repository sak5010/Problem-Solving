'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
input.shift();
input = input.map(Number);

// 1. 1, 2 원소의 차와 2, 3 원소의 차가 같으면 등차수열. 차를 Q에 저장.
//    차가 다르면 등비수열. 2에서 1을 나눈 값이 등비. 등비를 Q에 저장.
// 2. input 끝까지 가서 마지막 수에서 등차면 등차 값을 더해서 반환.
//    등비면 등비 값을 곱해서 반환.
const P = input[0];
const isAP = input[1] - input[0] === input[2] - input[1] ? true : false;
const Q = isAP ? input[1] - input[0] : input[1] / input[0];

const lastValue = input[input.length-1];
const result = isAP ? lastValue + Q : lastValue * Q;

console.log(result);