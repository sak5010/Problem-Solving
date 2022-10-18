function solution(x) {
    let sumCipher = x.toString().split('').map(x => Number(x)).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    if (x % sumCipher === 0) return true;
    return false;
}