"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

//  (R1+R2)/2 = S
// R1, S 입력 받음
// S에 2를 곱하고 R1을 빼면 R2가 나온다.
const [R1, S] = input.split(" ").map(Number);
const R2 = S * 2 - R1;
console.log(R2);
