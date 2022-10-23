const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = input.split(" ").map((num) => Number(num));
arr = arr.sort((a, b) => a - b);
console.log(arr[1]);
