const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [F, S, G, U, D] = input.split(" ").map(Number);

const building = new Array(F + 1).fill(-1);

const q = [];

q.push(S);
building[S] = 0;

while (q.length !== 0) {
  const x = q.shift();
  if (x + U <= F && building[x + U] == -1) {
    q.push(x + U);
    building[x + U] = building[x] + 1;
  }
  if (x - D > 0 && building[x - D] == -1) {
    q.push(x - D);
    building[x - D] = building[x] + 1;
  }
}

building[G] === -1 ? console.log("use the stairs") : console.log(building[G]);
