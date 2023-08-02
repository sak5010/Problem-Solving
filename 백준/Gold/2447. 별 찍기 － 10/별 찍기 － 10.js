const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const solve = (n) => {
  if (n === 1) return ["*"];

  const stars = solve(n / 3);
  const list = [];

  for (let star of stars) list.push(star.repeat(3));
  for (let star of stars) list.push(star + " ".repeat(n / 3) + star);
  for (let star of stars) list.push(star.repeat(3));

  return list;
};

console.log(solve(n).join("\n"));
