const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

let a = 0;
let b = 0;
input[0].split("").forEach((alphabet) => {
  if (alphabet === "A") a++;
  else b++;
});

if (a > b) console.log("A");
else if (a < b) console.log("B");
else console.log("Tie");
