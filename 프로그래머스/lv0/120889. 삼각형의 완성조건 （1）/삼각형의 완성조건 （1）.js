function solution(sides) {
    const sorted = sides.sort((a,b) => a-b);
    return sorted[0] + sorted[1] > sorted[2] ? 1 : 2;
}