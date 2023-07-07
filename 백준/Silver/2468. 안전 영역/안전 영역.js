const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. 주어지는 2차원 배열의 원소 중에서 최소값과 최대값을 구한다.
// 2. (최소값~ 최대값 - 1)범위에 해당하는 부분을 반복하는데, 최소값부터 비에 잠긴 녀석으로 취급하고 bfs를 돌린다.
// 3. 2에서 돌린 bfs에서 안전지역 개수의 최대를 계속 갱신한다.

input = input.split("\n");
const n = Number(input.shift());

const map = input.map((line) => line.split(" ").map(Number));

let low = Number.MAX_VALUE;
let high = Number.MIN_VALUE;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    low = Math.min(low, map[i][j]);
    high = Math.max(high, map[i][j]);
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let maxCountSafeRegion = 1;
for (let rain = low; rain < high; rain++) {
  const visited = Array.from({ length: n }, () => new Array(n).fill(0));
  const q = [];
  let countSafeRegion = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0 && map[i][j] > rain) {
        q.push([i, j]);
        visited[i][j] = 1;
        countSafeRegion++;
        while (q.length !== 0) {
          const [queuedX, queuedY] = q.shift();
          for (let dir = 0; dir < 4; dir++) {
            const nx = queuedX + dx[dir];
            const ny = queuedY + dy[dir];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (visited[nx][ny] === 1 || map[nx][ny] <= rain) continue;
            q.push([nx, ny]);
            visited[nx][ny] = 1;
          }
        }
      }
    }
  }
  maxCountSafeRegion = Math.max(maxCountSafeRegion, countSafeRegion);
}

console.log(maxCountSafeRegion);
