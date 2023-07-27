const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let word = [...input];

while (word.length > 10) {
  console.log(word.splice(0, 10).join(""));
}

word.length > 0 ? console.log(word.join("")) : null;
