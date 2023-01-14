const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const attendance = Array(30).fill(0);

input.split('\n').map((val) => Number(val))
  .forEach((val) => {
    attendance[val-1] = 1;
  });

attendance.forEach((val, index) => {
  if (val === 0) {
    console.log(index + 1);
  }
})