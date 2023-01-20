'use strict';

const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [age1, age2] = input.split('\n').map(Number);

console.log(age2 + age2 - age1);