const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input);

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPalindrome = (num) => {
  let strNum = num.toString();
  let reverseStrNum = strNum.split("").reverse().join("");
  if (strNum === reverseStrNum) return true;
  return false;
};

while (true) {
  if (isPalindrome(n) && isPrime(n)) {
    console.log(n);
    break;
  }
  n++;
}
