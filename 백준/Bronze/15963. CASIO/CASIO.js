const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [n, m] = input.split(" ").map((num) => Number(num));
console.log(n === m ? 1 : 0);
