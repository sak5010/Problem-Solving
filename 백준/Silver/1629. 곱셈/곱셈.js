const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// a^b mode c 구하기

const [a, b, c] = input.split(" ").map(Number);

const POW = (a, b, m) => {
  a = BigInt(a);
  m = BigInt(m);
  if (b === 1) return a % m;
  let val = POW(a, Math.floor(b / 2), m);
  val = BigInt((val * val) % m);
  if (b % 2 === 0) return val;
  else return (val * a) % m;
};

console.log(Number(POW(a, b, c)));
