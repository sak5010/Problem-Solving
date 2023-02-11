'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.split('').sort((a,b) => b - a).join(''));