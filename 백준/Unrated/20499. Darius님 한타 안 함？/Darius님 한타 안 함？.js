const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("/");
const [k, d, a] = input.map(Number);

if (k + a < d || d === 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}
