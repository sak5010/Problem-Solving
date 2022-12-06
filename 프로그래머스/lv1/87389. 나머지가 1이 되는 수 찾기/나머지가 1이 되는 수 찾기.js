function solution(n) {
    if (n%2!==0) return 2;
    result = 3;
    while (true) {
        if (n%result === 1) {
            return result;
        }
        result++;
    }
}