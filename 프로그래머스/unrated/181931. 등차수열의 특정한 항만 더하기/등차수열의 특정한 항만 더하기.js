function solution(a, d, included) {
    let as = a;
    let result = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) result += as;
        as += d;
    }
    return result;
}