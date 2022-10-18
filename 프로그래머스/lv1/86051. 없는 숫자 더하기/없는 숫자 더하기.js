function solution(numbers) {
    let originNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach(val => {
        originNumbers[val] = 0;
    });
    const answer = originNumbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    return answer;
}