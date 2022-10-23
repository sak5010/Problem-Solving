const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

let result = "int";
while (num !== 0) {
  result = "long " + result;
  num -= 4;
}

console.log(result);
