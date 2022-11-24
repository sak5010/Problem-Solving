function solution(money) {
    const num = Math.floor(money / 5500);
    const remain = money % 5500;
    return [num, remain];
}