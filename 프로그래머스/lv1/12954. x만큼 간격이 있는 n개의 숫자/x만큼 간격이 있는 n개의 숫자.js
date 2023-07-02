function solution(x, n) {
    const answer = [];
    let sumX = x;
    while (n--) {
        answer.push(sumX);
        sumX += x;
    }
    return answer;
}