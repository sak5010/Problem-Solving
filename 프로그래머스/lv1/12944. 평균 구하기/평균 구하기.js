function solution(arr) {
    const sum = arr.reduce((acc, cur) => {
        return acc + cur;
    });
    return sum / arr.length;
}