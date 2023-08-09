const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 17;

input = input.split("\n");
const [L, C] = input.shift().split(" ").map(Number);
const chars = input[0].split(" ").sort();
const arr = new Array(MAX_LENGTH);

const resultConsole = [];

const check = (arr) => {
  let vowel = 0;
  for (let i = 0; i < L; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    )
      vowel++;
  }
  if (vowel && L - vowel >= 2) return true;
  return false;
};

const func = (start, k) => {
  if (k === L) {
    if (check(arr)) resultConsole.push(arr.join(""));
    return;
  }
  for (let i = start; i < C; i++) {
    arr[k] = chars[i];
    func(i + 1, k + 1);
  }
};

func(0, 0);
console.log(resultConsole.join("\n"));
