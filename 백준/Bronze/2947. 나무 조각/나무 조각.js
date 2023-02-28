'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const swap = (arr, item1, item2) => {
  let temp = arr[item1];
  arr[item1] = arr[item2];
  arr[item2] = temp;
};

let resultConsole = "";

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        resultConsole += arr.join(' ') + "\n";
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
};

input = input.split(' ').map(Number);
bubbleSort(input);
console.log(resultConsole);