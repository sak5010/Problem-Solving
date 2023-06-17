function solution(num_list) {
    const multiplyOfList = num_list.reduce((acc, cur) => acc * cur);
    const powOfSumOfList = Math.pow(num_list.reduce((acc, cur) => acc + cur), 2);
    return multiplyOfList < powOfSumOfList ? 1 : 0;
}