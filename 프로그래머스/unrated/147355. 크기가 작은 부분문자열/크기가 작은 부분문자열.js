// 1. p의 길이 만큼 t의 부분을 숫자로 바꿔 비교한다.
// 2. 그 부분이 p보다 작거나 같으면 result에 1을 추가한다.
// 3. result 반환
function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const numbers = Number(p);
        const subNumbers = Number(t.slice(i, i+p.length));
        if (subNumbers <= numbers) result++;
    }
    return result;
}