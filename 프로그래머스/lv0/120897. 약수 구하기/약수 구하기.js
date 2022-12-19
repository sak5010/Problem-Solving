function solution(n) {
    let result = [];
    for (let i = 1; i <= Math.floor(n/2); i++) {
        if (n%i===0) result.push(i);
    }
    result.push(n);
    return result;
}