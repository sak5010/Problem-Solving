const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();

const vowels = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

let print = "";

input.forEach((line) => {
  let count = 0;
  line
    .toLowerCase()
    .split("")
    .forEach((c) => {
      if (c in vowels) {
        count++;
      }
    });
  print += count + "\n";
});

console.log(print);
