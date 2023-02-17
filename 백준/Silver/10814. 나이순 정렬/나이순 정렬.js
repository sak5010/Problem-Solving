'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split('\n');
input.shift();

let array = input.map((line) => {
  let [age, name] = line.split(' ');
  age = Number(age);
  return [age, name];
});

array = array.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }  
});

let resultConsole = "";
array.forEach((info) => {
  resultConsole += `${info[0]} ${info[1]}\n`;
});
console.log(resultConsole);