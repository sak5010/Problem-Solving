"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");

// 1. 듣도 못한 수 N명을 obj에 등록.
// 2. 보지도 못한 수 M명이 obj에 있는지 확인. 있으면 result 배열에 넣음.
// 3. result 배열을 사전순으로 정렬.
// 4. result.length 출력, result 원소들을 순서대로 출력.
const [N, M] = input.shift().split(" ");

const notHearPeople = input.slice(0, N);
const notSeePeople = input.slice(N, N + M);

const obj = {};
const result = [];
notHearPeople.forEach((people) => {
  obj[people] = 1;
});

notSeePeople.forEach((people) => {
  if (people in obj) {
    result.push(people);
  }
});

result.sort();
let resultConsole = result.length + "\n";
result.forEach((people) => {
  resultConsole += people + "\n";
});
console.log(resultConsole);
