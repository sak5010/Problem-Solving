const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const sketchbook = input.map((line) => line.split(" ").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = []; // queue class로 속도 개선 가능

let countOfPaints = 0;
let maxSizePaint = 0;
let sizeOfPaint;

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (sketchbook[x][y] === 1) {
      sizeOfPaint = 0;
      countOfPaints++;
      sizeOfPaint++;
      sketchbook[x][y] = 2; // 방문
      queue.push([x, y]);
      while (queue.length !== 0) {
        const [queuingX, queuingY] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
          dirX = queuingX + dx[dir];
          dirY = queuingY + dy[dir];
          if (dirX >= n || dirY >= m || dirX < 0 || dirY < 0) continue; // out of range
          if (sketchbook[dirX][dirY] === 0 || sketchbook[dirX][dirY] === 2)
            continue; // 벽이거나 이미 방문했거나
          sketchbook[dirX][dirY] = 2;
          queue.push([dirX, dirY]);
          sizeOfPaint++;
        }
        maxSizePaint = Math.max(maxSizePaint, sizeOfPaint);
      }
    }
  }
}
console.log(countOfPaints);
console.log(maxSizePaint);
