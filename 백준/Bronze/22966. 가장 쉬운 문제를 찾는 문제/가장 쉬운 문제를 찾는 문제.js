const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

let easyLevel = 5;
let easyTitle;
input.forEach((line) => {
  const [title, level] = line.split(" ");
  if (Number(level) < easyLevel) {
    easyTitle = title;
    easyLevel = Number(level);
  }
});
console.log(easyTitle);
