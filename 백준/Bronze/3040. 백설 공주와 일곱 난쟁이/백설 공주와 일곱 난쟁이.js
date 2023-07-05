const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const dwarfs = input.split("\n").map(Number);

let sum = dwarfs.reduce((acc, cur) => acc + cur);

let a, b;
for (let i = 0; i < dwarfs.length; i++) {
  for (let j = i + 1; j < dwarfs.length; j++) {
    if (sum - (dwarfs[i] + dwarfs[j]) === 100) {
      a = i;
      b = j;
      break;
    }
  }
  if (a) break;
}

dwarfs.forEach((dwarf) => {
  if (dwarf !== dwarfs[a] && dwarf !== dwarfs[b]) console.log(dwarf);
});
