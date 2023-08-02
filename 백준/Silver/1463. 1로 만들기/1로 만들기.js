const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

// 1. 정수 n + 1만큼의 배열 dist를 만든다. (-1로 초기화)
// 2. 1, 2, 3 조건에 따라 BFS로 거리를 채운다.
// 3. dist[1]의 값을 출력한다.

const dist = new Array(n + 1).fill(-1);

const q = [];
q.push(n);
dist[n] = 0;
while (q.length !== 0) {
  const x = q.shift();
  if (x % 3 === 0 && dist[x / 3] === -1) {
    q.push(x / 3);
    dist[x / 3] = dist[x] + 1;
  }
  if (x % 2 === 0 && dist[x / 2] === -1) {
    q.push(x / 2);
    dist[x / 2] = dist[x] + 1;
  }
  if (x > 0 && dist[x - 1] === -1) {
    q.push(x - 1);
    dist[x - 1] = dist[x] + 1;
  }
}

console.log(dist[1]);
