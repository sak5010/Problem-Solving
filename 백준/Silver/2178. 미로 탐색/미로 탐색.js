"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

// maze에 bfs를 진행하고, 같은 크기의 dist 배열에 각 거리들을 표시한다.

const maze = input.map((line) => line.split("").map(Number));
const n = maze.length;
const m = maze[0].length;
const dist = Array.from({ length: n }, () => new Array(m).fill(-1));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = [];
let distLevel = 1;

let x = 0;
let y = 0;
queue.push([x, y]);
dist[x][y] = distLevel;
while (queue.length !== 0) {
  const [queuedX, queuedY] = queue.shift();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirY < 0 || dirX >= n || dirY >= m) continue;
    if (maze[dirX][dirY] === 0 || dist[dirX][dirY] !== -1) continue;
    queue.push([dirX, dirY]);
    dist[dirX][dirY] = dist[queuedX][queuedY] + 1;
  }
}
console.log(dist[n - 1][m - 1]);
