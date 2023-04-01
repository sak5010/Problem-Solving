"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [s, k, h] = input.split(" ").map(Number);

if (s + k + h >= 100) {
  console.log("OK");
} else {
  const min = Math.min(s, k, h);
  if (min === s) {
    console.log("Soongsil");
  } else if (min === k) {
    console.log("Korea");
  } else if (min === h) {
    console.log("Hanyang");
  }
}
