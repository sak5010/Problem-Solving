function solution(array) {
    let result = 0;
    array.forEach((num) => {
        num.toString().split('').forEach((n) => {
            if (n === '7') result++;
        });
    });
    return result;
}