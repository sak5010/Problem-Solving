// 1. n + 1개의 원소를 가지는 배열 wall을 만든다. 모든 원소를 1로 초기화 한다.
// 2. section의 원소를 인덱스로 하여 배열 wall에 접근한 뒤 0으로 초기화 한다.
// 3. 배열 wall을 1부터 끝까지 순회하며 값이 0을 만나면 m개 만큼 모두 1로 초기화 하고, result를 1 증가 시킨다.
// 4. result를 반환한다.
function solution(n, m, section) {
    const wall = new Array(n + 1).fill(1);
    section.forEach((s) => {
        wall[s] = 0;
    });
    let result = 0;
    for (let i = 1; i < wall.length; i++) {
        if (wall[i] === 0) {
            for (let j = i; j < i + m; j++) {
                wall[j] = 1;
            }
            result++;
            i += m - 1;
        }
    }
    return result;
}