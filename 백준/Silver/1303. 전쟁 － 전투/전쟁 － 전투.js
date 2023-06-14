const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
const [m, n] = input.shift().split(" ").map(Number);
const field = input.map((line) => line.split(""));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const whiteQ = [];
const blueQ = [];
let totalWhitePower = 0;
let totalBluePower = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (field[i][j] === "W") {
      whiteQ.push([i, j]);
      field[i][j] = "w";
      let numberOfTogetherWhite = 1;
      while (whiteQ.length !== 0) {
        const [queuedX, queuedY] = whiteQ.shift();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
          if (field[nx][ny] !== "W") continue;
          whiteQ.push([nx, ny]);
          field[nx][ny] = "w";
          numberOfTogetherWhite++;
        }
      }
      totalWhitePower += numberOfTogetherWhite * numberOfTogetherWhite;
    } else if (field[i][j] === "B") {
      blueQ.push([i, j]);
      field[i][j] = "b";
      let numberOfTogetherBlue = 1;
      while (blueQ.length !== 0) {
        const [queuedX, queuedY] = blueQ.shift();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
          if (field[nx][ny] !== "B") continue;
          blueQ.push([nx, ny]);
          field[nx][ny] = "b";
          numberOfTogetherBlue++;
        }
      }
      totalBluePower += numberOfTogetherBlue * numberOfTogetherBlue;
    }
  }
}
console.log(totalWhitePower, totalBluePower);
