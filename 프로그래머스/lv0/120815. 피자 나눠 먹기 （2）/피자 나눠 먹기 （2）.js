// n으로 나누어 떨어지면 끝
function solution(n) {
    let pizza = 6;
    let result = 1;
    while (true) {
        if (pizza % n === 0) {
            return result;
        }
        pizza += 6;
        result += 1;
    }
}