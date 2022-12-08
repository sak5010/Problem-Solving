function solution(my_string) {
    const newNums = my_string.split('').filter((c) => !isNaN(c)).map((n) => Number(n));
    return newNums.reduce((acc, cur) => acc + cur);
}