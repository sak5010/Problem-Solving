const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;
input.split("").forEach((c) => {
  switch (c) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      count++;
  }
});
console.log(count);
