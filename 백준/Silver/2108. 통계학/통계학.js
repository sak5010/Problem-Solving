'use strict';
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();


// 5: 2
// 3: 5
// 2: 1
// 5: 5
// 6: 5
// 1. n번 돌면서 최대 빈도수 찾고
// 2. 그 최대 빈도수 카운트 세고
// 3. 카운트가 1보다 크면 최대 빈도수 key들을 배열에 넣고
// 4. 그 배열을 정렬해서 두번째로 작은 녀석을 리턴한다.
const mostFrequency = (arr) => {
  const frequencyObj = {};
  arr.forEach((num) => {
    frequencyObj[num] = (frequencyObj[num] || 0) + 1;
  });
  let maxFrequencyValue = 0;
  for (const key in frequencyObj) {
    if (frequencyObj[key] > maxFrequencyValue)
      maxFrequencyValue = frequencyObj[key];
  }
  let maxFrequencyCount = 0;
  let maxFrequencyKey = 0;
  for (const key in frequencyObj) {
    if (frequencyObj[key] === maxFrequencyValue) {
      maxFrequencyCount++;
      maxFrequencyKey = key;
    }
  }
  let arrayOfMaxFrequencyKeys = [];
  if (maxFrequencyCount > 1) {
    for (const key in frequencyObj) {
      if (frequencyObj[key] === maxFrequencyValue)
        arrayOfMaxFrequencyKeys.push(key);
    }
  } else {
    return maxFrequencyKey;
  }
  arrayOfMaxFrequencyKeys = arrayOfMaxFrequencyKeys.map(Number).sort((a,b) => a-b);
  return arrayOfMaxFrequencyKeys[1];
}

// 1. 두번째 줄 부터 마지막 줄 까지 배열로 입력을 받는다.
// 2. 오름차순으로 정렬한다.
// 3. 네 출력조건을 result 출력에 '\n'과 함께 넣고 출력.
input = input.split('\n');
const n = Number(input.shift());
let numbers = input.map(Number);

numbers = numbers.sort((a,b) => a-b);

let resultConsole = "";

const airthMean = Math.round(numbers.reduce((acc, cur) => acc + cur) / n);
const middleValue = numbers[(n-1)/2];
const mode = mostFrequency(numbers);
const range = numbers[n-1] - numbers[0];

resultConsole += airthMean + "\n" + middleValue + '\n' + mode + '\n' + range;
console.log(resultConsole);