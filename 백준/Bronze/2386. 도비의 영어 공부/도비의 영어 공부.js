const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();

let resultConsole = "";
input.forEach((line) => {
  line = line.split(" ");
  let [alphabet, sentence] = [line.shift(), line.join("")];
  sentence = sentence.toLowerCase().split("");
  let cnt = 0;
  sentence.forEach((c) => {
    if (alphabet === c) cnt++;
  });
  resultConsole += `${alphabet} ${cnt}\n`;
});

console.log(resultConsole);
