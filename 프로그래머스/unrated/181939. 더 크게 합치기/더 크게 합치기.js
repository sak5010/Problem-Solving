function solution(a, b) {
    const result1 = a.toString() + b.toString();
    const result2 = b.toString() + a.toString();
    if (result1 >= result2) {
        return Number(result1);
    } else {
        return Number(result2);
    }
}