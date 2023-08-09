const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const isUsed1 = new Array(n + 1).fill(0);
const isUsed2 = new Array(2 * n).fill(0);
const isUsed3 = new Array(2 * n).fill(0);
const chessboard = Array.from({ length: n }, () => new Array(n).fill(0));

let cnt = 0;
const func = (cur) => {
  if (cur === n) {
    cnt++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (
      isUsed1[i] === 0 &&
      isUsed2[cur + i] === 0 &&
      isUsed3[cur - i + n - 1] === 0
    ) {
      chessboard[cur][i] = 1;
      isUsed1[i] = 1;
      isUsed2[cur + i] = 1;
      isUsed3[cur - i + n - 1] = 1;
      func(cur + 1);
      chessboard[cur][i] = 0;
      isUsed1[i] = 0;
      isUsed2[cur + i] = 0;
      isUsed3[cur - i + n - 1] = 0;
    }
  }
};

func(0);
console.log(cnt);
