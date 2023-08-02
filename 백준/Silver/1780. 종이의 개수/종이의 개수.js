const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const n = Number(input.shift());
const paper = input.map((line) => line.split(" ").map(Number));

const cnt = new Array(3).fill(0); // -1, 0, 1의 개수

const isSame = (x, y, n) => {
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (paper[i][j] !== paper[x][y]) return false;
    }
  }
  return true;
};

const solve = (x, y, z) => {
  if (isSame(x, y, z)) {
    cnt[paper[x][y] + 1] += 1;
    return;
  }
  const n = z / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      solve(x + i * n, y + j * n, n);
    }
  }
};

solve(0, 0, n);
cnt.forEach((c) => console.log(c));
