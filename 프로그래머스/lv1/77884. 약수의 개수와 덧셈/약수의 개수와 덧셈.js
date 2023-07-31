const getNumberOfDivisor = (number) => {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) count++;
    }
    return count;
}

function solution(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        if (getNumberOfDivisor(i) % 2 === 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    return sum;
}