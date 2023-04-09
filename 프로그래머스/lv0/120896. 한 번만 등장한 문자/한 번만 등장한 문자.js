function solution(s) {
    // frequency counter pattern.
    // 1. s를 순회하면서 각 원소인 문자 c를 객체에 key로 넣고 만날 때 마다 value를 넣어 카운팅한다.
    // 2. 빈 문자열로 초기화 된 result 변수에 객체를 순회하며 value값이 1인 key값 만을 result에 넣는다.
    // 3. result 반환
    const frequencyCounter = {};
    s.split('').forEach((c) => {
        frequencyCounter[c] = (frequencyCounter[c] || 0) + 1;
    });
    let result = [];
    for (let c in frequencyCounter) {
        if (frequencyCounter[c] === 1) {
            result.push(c);
        }
    }
    return result.sort().join('');
}