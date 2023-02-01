const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const [antenas, eyes] = input.split("\n").map(Number);

let resultConsole = "";

if (antenas >= 3 && eyes <= 4) {
  resultConsole += "TroyMartian" + "\n";
}
if (antenas <= 6 && eyes >= 2) {
  resultConsole += "VladSaturnian" + "\n";
}
if (antenas <= 2 && eyes <= 3) {
  resultConsole += "GraemeMercurian";
}

console.log(resultConsole);
