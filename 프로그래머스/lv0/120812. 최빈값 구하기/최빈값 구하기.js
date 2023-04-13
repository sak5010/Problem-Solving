function solution(array) {
    // 1. frequency counter로 array의 숫자들을 key로하는 객체에 카운팅해서 담는다.
    // 2. 카운트를 할 때 마다 max값을 갱신한다.
    //    이 때, max값이 갱신되면 result에 n값이 들어가고, max값과 방금 카운팅 된 값이 같으면
    //    result에 -1이 들어간다.
    // 3. array를 다 돌았으면 result를 반환한다.
    const obj = {};
    let max = -1;
    let result = -1;
    array.forEach((n) => {
        obj[n] = (obj[n] || 0) + 1;
        if (obj[n] > max) {
            max = obj[n];
            result = n;
        } else if (obj[n] === max) {
            result = -1;
        }
    });
    return result;
}