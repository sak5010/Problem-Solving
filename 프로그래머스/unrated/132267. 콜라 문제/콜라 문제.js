// 보유중인 병 n이 바꿔주는 병 a 이상이면 계속 반복.
// result = 0
// 1. n을 a로 나눈 몫(b까지 곱한 값)을 result에 누적한다.
// 2. n을 1번에서 나온 몫과 나머지를 더해서 초기화 한다.
// 3. 위 과정을 반복해서 반복문을 빠져나오면 result를 반환한다.
function solution(a, b, n) {
    let result = 0;
    while (n >= a) {
        const quotient = Math.floor(n / a) * b;
        const remainder = n % a;
        result += quotient;
        n = quotient + remainder;
    }
    return result;
}