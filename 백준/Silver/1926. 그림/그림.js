"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 주어진 2차원 배열에서 동서남북으로 bfs를 돌린다. 범위를 벗어나지 않도록 한다.
// 한번 방문한 곳은 2를 넣도록 하자.
// bfs를 한 번 완수 했을 때 그림의 개수를 1 증가시키고 그 크기를 max와 비교하여 초기화 하자.
input = input.split("\n");
input.shift();

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const painting = input.map((line) => line.split(" ").map(Number));

let countPainting = 0;
let maxSizePainting = 0;

const n = painting.length;
const m = painting[0].length;

const queue = [];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (painting[x][y] === 1) {
      countPainting++;
      let sizePainting = 1;
      painting[x][y] = 2;
      queue.push([x, y]);
      while (queue.length !== 0) {
        const [queuedX, queuedY] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
          const dirX = queuedX + dx[dir];
          const dirY = queuedY + dy[dir];
          if (dirX < 0 || dirX >= n || dirY < 0 || dirY >= m) continue;
          if (painting[dirX][dirY] !== 1) continue;
          sizePainting++;
          painting[dirX][dirY] = 2;
          queue.push([dirX, dirY]);
        }
        maxSizePainting = Math.max(maxSizePainting, sizePainting);
      }
    }
  }
}
console.log(countPainting, maxSizePainting);
