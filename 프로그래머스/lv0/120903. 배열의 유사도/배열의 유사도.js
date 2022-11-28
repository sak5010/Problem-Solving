function solution(s1, s2) {
    let result = 0;
    s1.forEach((s) => {
        if (s2.includes(s)) {
            result++;
        }
    });
    return result;
}