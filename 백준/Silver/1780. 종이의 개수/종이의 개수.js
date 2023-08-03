const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const n = Number(input.shift());
const paper = input.map((line) => line.split(" ").map(Number));

const cnt = new Array(3).fill(0); // -1, 0, 1의 개수

const check = (x, y, n) => {
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (paper[i][j] !== paper[x][y]) return false;
    }
  }
  return true;
};

const solve = (x, y, z) => {
  if (z === 1 || check(x, y, z)) {
    cnt[paper[x][y] + 1] += 1;
    return;
  }
  const n = z / 3;
  for (let i = x; i < x + z; i += n) {
    for (let j = y; j < y + z; j += n) {
      solve(i, j, n);
    }
  }
};

solve(0, 0, n);
console.log(cnt.join("\n"));
