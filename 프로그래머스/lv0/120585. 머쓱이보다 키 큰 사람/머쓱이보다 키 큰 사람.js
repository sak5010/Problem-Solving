function solution(array, height) {
    let result = 0;
    array.forEach(h => {
        if (h > height) result++
    });
    return result;
}