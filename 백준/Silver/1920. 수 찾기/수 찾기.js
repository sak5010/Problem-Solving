const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();
const [a, oneLine, b, twoLine] = input.split("\n");

const flagObj = {};
oneLine.split(" ").forEach((n) => {
  flagObj[n] = 1;
});

let printer = "";
twoLine.split(" ").forEach((n) => {
  n in flagObj ? (printer += "1" + "\n") : (printer += "0" + "\n");
});

console.log(printer);
