const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const aTob = [];
let cnt = 0;

const func = (a, b, n) => {
  if (n === 1) {
    aTob.push([a, b]);
    cnt++;
    return;
  }
  func(a, 6 - a - b, n - 1);
  aTob.push([a, b]);
  cnt++;
  func(6 - a - b, b, n - 1);
};

func(1, 3, n);

console.log(cnt);
console.log(aTob.map((pair) => pair.join(" ")).join("\n"));
