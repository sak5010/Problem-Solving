function solution(n, k) {
    let total = 0;
    k = k - Math.floor(n / 10);
    total = n * 12000;
    if (k > 0) total += k * 2000;
    return total;
}