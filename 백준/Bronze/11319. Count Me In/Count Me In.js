const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

const isVowels = (char) => {
  const vowelsObj = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  if (char in vowelsObj) {
    return true;
  }
  return false;
};

let resultConsole = "";
input.forEach((sentence) => {
  let vowels = 0;
  let consonants = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (isVowels(sentence[i])) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  resultConsole += consonants + " " + vowels + "\n";
});

console.log(resultConsole);
