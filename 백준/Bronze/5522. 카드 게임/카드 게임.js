'use strict';

const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const result = input.split('\n').map(Number).reduce((acc, cur) => acc + cur);
console.log(result);