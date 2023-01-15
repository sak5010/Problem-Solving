const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const inputArray = input.split('\n');
const [row, col] = inputArray.shift().split(' ').map((n) => Number(n));
let matrixA = [];
let matrixB = [];
for (let i = 0; i < row; i++) {
  matrixA.push(inputArray.shift());
}
for (let i = 0; i < row; i++) {
  matrixB.push(inputArray.shift());
}
matrixA = matrixA.map((val) => {
  return val.split(' ').map((n) => Number(n));
});
matrixB = matrixB.map((val) => {
  return val.split(' ').map((n) => Number(n));
});

let matrixResult = Array.from(Array(row), () => Array(col).fill(0));
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    matrixResult[i][j] = matrixA[i][j] + matrixB[i][j];
  }
}

matrixResult.forEach((val) => console.log(val.join(' ')));