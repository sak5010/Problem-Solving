"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

// 1. for문 돌면서 1 발견하면 bfs 돌림. 2로 채움. 끝나면 result 배열에 단지 크기 넣음.
// 2. 단지 수 출력, 단지 크기 오름차순으로 출력.
input = input.split("\n");
const n = Number(input.shift());
const map = input.map((line) => line.split("").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const q = [];
const result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let sizeOfComplex = 0;
    if (map[i][j] === 1) {
      q.push([i, j]);
      map[i][j] = 2;
      sizeOfComplex++;
      while (q.length !== 0) {
        const [queuedX, queuedY] = q.shift();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (map[nx][ny] === 2 || map[nx][ny] === 0) continue;
          q.push([nx, ny]);
          map[nx][ny] = 2;
          sizeOfComplex++;
        }
      }
      result.push(sizeOfComplex);
    }
  }
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((r) => console.log(r));
