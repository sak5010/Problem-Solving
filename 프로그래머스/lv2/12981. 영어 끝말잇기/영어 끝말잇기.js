// 1. words를 순회하면서
//   - 단어들을 obj에 저장한다. (중복을 탐지하기 위해서)
//   - n이 3이면 1, 2, 3, 1, 2, 3 이렇게 순서를 계속 체크한다. (order)
//   - 1, 2, 3 에서 다시 1로 바꼈을 때 라운드를 증가시킨다. (round)
// 2. obj에 이미 저장된 녀석이 words의 원소로 나오면 [order, round]를 반환한다.

function solution(n, words) {
    const wordsObj = {};
    let order = 1;
    let round = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i] in wordsObj) return [order, round];
        wordsObj[words[i]] = 1;
        if (i > 0) {
            const prevLastChar = words[i - 1].charAt(words[i - 1].length - 1);
            const curFirstChar = words[i].charAt(0);
            if (prevLastChar !== curFirstChar) return [order, round];
        }
        order++;
        if (order > n) {
            order %= n;
            round++;
        }
    }
    return [0, 0];
}