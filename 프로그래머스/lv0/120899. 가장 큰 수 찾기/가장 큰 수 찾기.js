function solution(array) {
    let maxNum = 0;
    let maxIndex = 0;
    array.forEach((num, index) => {
        if (num > maxNum) {
            maxNum = num;
            maxIndex = index;
        }
    });
    return [maxNum, maxIndex];
}