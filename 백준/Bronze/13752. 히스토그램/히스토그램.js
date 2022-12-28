const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const array = input.split("\n");
array.shift();

array.forEach((k) => {
  let line = "";
  for (let i = 0; i < Number(k); i++) {
    line += "=";
  }
  console.log(line);
});
