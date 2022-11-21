function solution(array) {
    const sorted = array.sort((a,b) => a-b);
    return sorted[Math.floor(sorted.length/2)];
}