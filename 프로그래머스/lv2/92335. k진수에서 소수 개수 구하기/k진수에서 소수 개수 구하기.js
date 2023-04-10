function decimalToBaseK(n, k) {
  let result = "";
  while (n > 0) {
    result = (n % k) + result;
    n = Math.floor(n / k);
  }
  return result || "0";
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}


function solution(n, k) {
    // 1. 정수 n을 k진수로 바꾼 수를 kNumber에 저장한다.
    // 2. kNumber를 0을 기준으로 쪼갠다.
    // 3. 쪼갠 각 원소를 돌며 비어 있지 않고 1이 아닌 녀석은 number로 변환해서 소수인지 판별한다.
    // 4. 소수가 판별되면 result를 1씩 증가시킨다.
    let kNumber = decimalToBaseK(n, k);
    let result = 0;
    kNumber.split('0').forEach((num) => {
        if (num !== "" && num !== 1) {
            if (isPrime(Number(num))) {
                result++;
            }
        }
    });
    return result;
}