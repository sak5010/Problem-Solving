const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const allPrice = Number(input);
const onePrice = allPrice * 0.78;
const twoPrice = allPrice - allPrice * 0.2 * 0.22;

console.log(onePrice, twoPrice);
