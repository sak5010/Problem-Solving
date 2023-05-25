const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

const result = input.map((line) => {
  const firstLetter = line.charAt(0).toUpperCase();
  return firstLetter + line.slice(1);
});

console.log(result.join("\n"));
