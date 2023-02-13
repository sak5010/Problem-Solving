'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const CAMBRIDGE = {};
"CAMBRIDGE".split('').forEach((c) => {
  CAMBRIDGE[c] = 1;
});

const result = input.split('').map((c) => {
  if ( !(c in CAMBRIDGE) ) {
    return c;
  }
}).join('');

console.log(result);