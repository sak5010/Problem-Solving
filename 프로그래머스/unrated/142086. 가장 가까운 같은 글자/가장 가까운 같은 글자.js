function solution(s) {
    // 1. obj에 s의 각 원소를 키값으로 넣으며 값은 인덱스를 넣는다.
    // 2. 처음 넣는 값이면 result에 -1을 추가한다.
    //    처음 보는 값이 아니면 (현재 인덱스 - obj[key])를 result에 넣는다.
    const obj = {};
    const result = [];
    s.split('').forEach((c, i) => {
        if (c in obj) {
            result.push(i - obj[c]);
        } else {
            result.push(-1);
        }
        obj[c] = i;
    });
    return result;
}