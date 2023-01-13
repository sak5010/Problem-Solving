const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const array = input.split('\n');
const result = Number(array.shift());
array.shift();

let sum = 0;
array.forEach((val) => {
  const [price, num] = val.split(' ');

  sum += Number(price) * Number(num);
});

if (sum === result) {
  console.log('Yes');
} else {
  console.log('No');
}