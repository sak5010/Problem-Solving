const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b, c] = input.split("\n").map(Number);

if (a + b + c === 180) {
  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
