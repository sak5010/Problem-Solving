const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const table = input.split('\n')
  .map((val) => val.split(' ').map(Number));

let max = 0;
let row = 1;
let col = 1;
table.forEach((line, rowIndex) => {
  line.forEach((number, colIndex) => {
    if (number > max) {
      max = number;
      row = rowIndex + 1;
      col = colIndex + 1;
    }
  })
})

console.log(max);
console.log(row, col);