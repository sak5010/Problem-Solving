const func1 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

const func2 = (n) => {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

function solution(n) {
    return n%2!==0 ? func1(n) : func2(n);
}