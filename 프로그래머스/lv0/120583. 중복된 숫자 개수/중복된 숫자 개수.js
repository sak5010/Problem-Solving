function solution(array, n) {
    let result = 0;
    array.forEach((val) => {
        if (val === n) result++;
    });
    return result;
}