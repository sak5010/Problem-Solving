const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const [n, s] = input.shift().split(" ").map(Number);
const ns = input[0].split(" ").map(Number);

let cnt = 0;

const func = (cur, total) => {
  if (cur === n) {
    if (total === s) cnt++;
    return;
  }
  func(cur + 1, total);
  func(cur + 1, total + ns[cur]);
};

func(0, 0);
if (s === 0) cnt--;
console.log(cnt);
