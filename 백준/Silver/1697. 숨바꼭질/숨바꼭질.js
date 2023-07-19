const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_DIST = 200000;

const [n, k] = input.split(" ").map(Number);
const dist = new Array(MAX_DIST).fill(-1);

const q = [];
dist[n] = 0;
q.push(n);
while (q.length !== 0) {
  const x = q.shift();
  if (x === k) {
    console.log(dist[k]);
    break;
  }
  if (x > 0 && dist[x - 1] === -1) {
    q.push(x - 1);
    dist[x - 1] = dist[x] + 1;
  }
  if (x < MAX_DIST && dist[x + 1] === -1) {
    q.push(x + 1);
    dist[x + 1] = dist[x] + 1;
  }
  if (x * 2 < MAX_DIST && dist[x * 2] === -1) {
    q.push(x * 2);
    dist[x * 2] = dist[x] + 1;
  }
}
