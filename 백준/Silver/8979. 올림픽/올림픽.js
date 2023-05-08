"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const [n, k] = input.shift().split(" ").map(Number);

const nations = input.map((line) => line.split(" ").map(Number));

// 1. nations을 조건에 따라 정렬한다. (내림차순)
// 2. 맨 앞에서부터 1등이다. 국가 k의 등수를 찾는다.

nations.sort((a, b) => {
  const [nation1, gold1, silver1, bronze1] = a;
  const [nation2, gold2, silver2, bronze2] = b;
  if (gold1 < gold2) {
    return 1;
  } else if (gold1 > gold2) {
    return -1;
  } else {
    if (silver1 < silver2) {
      return 1;
    } else if (silver1 > silver2) {
      return -1;
    } else {
      if (bronze1 < bronze2) {
        return 1;
      } else if (bronze1 > bronze2) {
        return -1;
      } else {
        return 0;
      }
    }
  }
});

const isSameRank = (nations, index) => {
  if (
    nations[index][1] === nations[index + 1][1] &&
    nations[index][2] === nations[index + 1][2] &&
    nations[index][3] === nations[index + 1][3]
  ) {
    return true;
  }
  return false;
};

let rank = 1;
let sameCount = 1;
nations.forEach((nation, index) => {
  if (nation[0] === k) {
    console.log(rank);
    return;
  }
  if (index !== nations.length - 1 && isSameRank(nations, index)) {
    sameCount++;
  } else {
    rank += sameCount;
    sameCount = 1;
  }
});
