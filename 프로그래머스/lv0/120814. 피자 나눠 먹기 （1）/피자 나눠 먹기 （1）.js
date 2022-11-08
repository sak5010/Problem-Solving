function solution(n) {
    result = 0;
    while (n > 0) {
        result++;
        n -= 7;
    }
    return result;
}