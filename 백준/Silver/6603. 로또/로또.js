const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.pop();

const MAX_LENGTH = 13;

input.forEach((line) => {
  const temp = line.split(" ").map(Number);
  const k = temp.shift();
  const S = [...temp];
  const arr = new Array(MAX_LENGTH).fill(0);

  const consoleResult = [];

  const func = (start, selected) => {
    if (selected === 6) {
      const consoleSpace = [];
      for (let i = 0; i < 6; i++) {
        consoleSpace.push(arr[i]);
      }
      consoleResult.push(consoleSpace.join(" "));
      return;
    }

    for (let i = start; i < k; i++) {
      arr[selected] = S[i];
      func(i + 1, selected + 1);
    }
  };

  func(0, 0);
  console.log(consoleResult.join("\n"));
  console.log();
});
