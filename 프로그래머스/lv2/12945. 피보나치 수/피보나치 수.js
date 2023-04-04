function solution(n) {
    let f0 = 0;
    let f1 = 1;
    let f2;
    if (n === 0) return f0;
    if (n === 1) return f1;
    for (let i = 2; i <= n; i++) {
        f2 = (f0 + f1) % 1234567;
        f0 = f1;
        f1 = f2;
    }
    return f2;
}