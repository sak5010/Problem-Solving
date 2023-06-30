"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// n by n 그림에 대해서 두 번 bfs를 돌리는 것 밖에 생각나지 않는군.
// 더 효율적인 방법이 있을까? 일단 풀고 다른 사람의 코드를 확인하자.
input = input.split("\n");
const n = Number(input.shift());
const painting = input.map((line) => line.split(""));
const visit1 = Array.from({ length: n }, () => new Array(n).fill(0));
const visit2 = Array.from({ length: n }, () => new Array(n).fill(0));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let q = [];
let countGroupNormal = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visit1[i][j] === 0) {
      countGroupNormal++;
      const color = painting[i][j];
      q.push([i, j]);
      visit1[i][j] = 1;
      while (q.length !== 0) {
        const [queuedX, queuedY] = q.shift();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (visit1[nx][ny] === 1 || painting[nx][ny] !== color) continue;
          q.push([nx, ny]);
          visit1[nx][ny] = 1;
        }
      }
    }
  }
}

q = [];
let countGroupNotNormal = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visit2[i][j] === 0) {
      countGroupNotNormal++;
      const color = painting[i][j];
      q.push([i, j]);
      visit2[i][j] = 1;
      while (q.length !== 0) {
        const [queuedX, queuedY] = q.shift();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (visit2[nx][ny] === 1) continue;
          if ((color === "R" || color === "G") && painting[nx][ny] === "B")
            continue;
          if (color === "B" && painting[nx][ny] !== color) continue;
          q.push([nx, ny]);
          visit2[nx][ny] = 1;
        }
      }
    }
  }
}
console.log(countGroupNormal, countGroupNotNormal);
