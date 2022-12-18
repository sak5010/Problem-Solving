function solution(n) {
    let flag = true;
    let result = [];
    while(n--) {
        result.push(flag ? "수" : "박");
        flag = !flag;
    }
    return result.join('');
}