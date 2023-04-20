// 1. i부터 j까지 증가하는 반복문에서 원소 하나 하나 당 1의 자리 문자를 확인하여 k가 있는지 확인. 있으면 result 증가.
// 2. result 반환
function solution(i, j, k) {
    let result = 0;
    k = k.toString();
    for (i; i <= j; i++) {
        i.toString().split('').forEach((n) => {
            if (n === k) result++;
        });
    }
    return result;
}