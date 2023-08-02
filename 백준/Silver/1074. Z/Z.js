const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [n, r, c] = input.split(" ").map(Number);

const func = (n, r, c) => {
  if (n === 0) return 0;
  const half = 1 << (n - 1);
  if (r < half && c < half) return func(n - 1, r, c);
  if (r < half && c >= half) return half * half + func(n - 1, r, c - half);
  if (r >= half && c < half) return 2 * half * half + func(n - 1, r - half, c);
  return 3 * half * half + func(n - 1, r - half, c - half);
};

console.log(func(n, r, c));
