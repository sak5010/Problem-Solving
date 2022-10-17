function solution(absolutes, signs) {
    let result = 0;
    absolutes.forEach((num, idx) => {
        if (signs[idx]) {
            result += num;
        } else {
            result -= num;
        }
    })
    
    var answer = result;
    return answer;
}