function solution(n) {
    const answer = n.toString().split('').reverse().map(x => Number(x));
    return answer;
}