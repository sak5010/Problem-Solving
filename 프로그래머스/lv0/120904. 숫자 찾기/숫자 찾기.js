function solution(num, k) {
    const result = num.toString().split('').map(Number).findIndex((elem) => elem === k);
    return result === -1 ? result : result + 1;
}