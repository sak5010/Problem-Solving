const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

charArray = input.split("");

const alphabetObj = {};
charArray.forEach((c) => {
  const isLowercaseAlphabet = c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122;
  if (isLowercaseAlphabet) {
    alphabetObj[c] = (alphabetObj[c] || 0) + 1;
  }
});

let max = 0;
for (key in alphabetObj) {
  if (alphabetObj[key] > max) {
    max = alphabetObj[key];
  }
}

let result = "";
for (key in alphabetObj) {
  if (alphabetObj[key] === max) {
    result += key;
  }
}
result = result.split("").sort().join("");
console.log(result);
