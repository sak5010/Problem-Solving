const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

const problems = input[0].split("");
let maxPoint = 0;

const Adrian = ["A", "B", "C"];
const Bruno = ["B", "A", "B", "C"];
const Goran = ["C", "C", "A", "A", "B", "B"];

let adrianPoint = 0;
let brunoPoint = 0;
let goranPoint = 0;

problems.forEach((problem, index) => {
  if (Adrian[index % Adrian.length] === problem) {
    adrianPoint++;
  }
  if (Bruno[index % Bruno.length] === problem) {
    brunoPoint++;
  }
  if (Goran[index % Goran.length] === problem) {
    goranPoint++;
  }
});

maxPoint = Math.max(adrianPoint, brunoPoint, goranPoint);
const winners = [];
if (adrianPoint === maxPoint) {
  winners.push("Adrian");
}
if (brunoPoint === maxPoint) {
  winners.push("Bruno");
}
if (goranPoint === maxPoint) {
  winners.push("Goran");
}
winners.sort();
let resultConsole = maxPoint + "\n";
winners.forEach((winner) => {
  resultConsole += winner + "\n";
});
console.log(resultConsole);
