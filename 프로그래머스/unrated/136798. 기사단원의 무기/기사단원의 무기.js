const countDivisors = (number) => {
  let count = 0;
  const sqrt = Math.sqrt(number);

  // 1부터 제곱근까지의 수로만 나누어 약수를 찾음
  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      count++;

      // 제곱근과 다른 수일 경우 대칭적인 약수를 찾음
      if (i !== sqrt) {
        count++;
      }
    }
  }
  return count;
}

// 1. 1~ number까지 약수의 개수를 나타내는 배열 divisors를 만든다.
// 2. divisors를 순회하면서 각 원소가 limit을 넘으면 그 원소를 power로 대체한다.
// 3. divisors의 합을 반환한다.
function solution(number, limit, power) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        divisors.push(countDivisors(i));
    }
    for (let i = 0; i < divisors.length; i++) {
        if (divisors[i] > limit) divisors[i] = power;
    }
    return divisors.reduce((acc, cur) => acc + cur);
}