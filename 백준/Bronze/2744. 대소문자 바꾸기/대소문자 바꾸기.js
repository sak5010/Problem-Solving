const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const result = input
  .split("")
  .map((c) => {
    if (c.charCodeAt() >= 97) return c.toUpperCase();
    return c.toLowerCase();
  })
  .join("");

console.log(result);
