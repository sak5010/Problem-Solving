const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const ns = input.split("\n").map(Number);

let consoleSpace = "";

const func = (n) => {
  if (n === 0) {
    consoleSpace += "-";
    return;
  }

  func(n - 1);
  for (let i = 0; i < Math.pow(3, n - 1); i++) {
    consoleSpace += " ";
  }
  func(n - 1);
};

ns.forEach((n) => {
  func(n);
  console.log(consoleSpace);
  consoleSpace = "";
});
