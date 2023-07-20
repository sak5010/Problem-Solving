function solution(sizes) {
    const long = [];
    const short = [];
    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];
        if (w > h) {
            long.push(w);
            short.push(h);
        } else {
            long.push(h);
            short.push(w);
        }
    }
    long.sort((a, b) => b - a);
    short.sort((a, b) => b - a);
    return long[0] * short[0];
}