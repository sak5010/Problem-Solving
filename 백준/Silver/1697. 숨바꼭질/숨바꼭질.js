const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_RAIL_DISTANCE = 200000;

const [n, k] = input.split(" ").map(Number);
const rail = new Array(MAX_RAIL_DISTANCE).fill(-1);

const q = [];
rail[n] = 0;
q.push(n);
while (q.length !== 0) {
  const x = q.shift();
  if (x > 0 && rail[x - 1] === -1) {
    rail[x - 1] = rail[x] + 1;
    q.push(x - 1);
  }
  if (x < MAX_RAIL_DISTANCE && rail[x + 1] === -1) {
    rail[x + 1] = rail[x] + 1;
    q.push(x + 1);
  }
  if (2 * x < MAX_RAIL_DISTANCE && rail[2 * x] === -1) {
    rail[2 * x] = rail[x] + 1;
    q.push(2 * x);
  }
}
console.log(rail[k]);
