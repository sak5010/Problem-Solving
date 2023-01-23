const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();

input.forEach((val) => {
  const words = val.split("");
  let left = 0;
  let right = words.length - 1;
  while (left < right) {
    if (words[left++] !== words[right--]) {
      console.log("no");
      return false;
    }
  }
  console.log("yes");
});
