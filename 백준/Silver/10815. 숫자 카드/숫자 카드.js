const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

let [n, myCards, m, cards] = input.split("\n");

myCards = myCards
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
cards = cards.split(" ").map(Number);

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return start > end ? 0 : 1;
};

let result = "";
cards.forEach((card) => {
  result += binarySearch(myCards, card) + " ";
});
console.log(result);
