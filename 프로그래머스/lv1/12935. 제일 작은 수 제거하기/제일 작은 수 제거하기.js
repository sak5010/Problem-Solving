function solution(arr) {
    if (arr.length === 1) return [-1];
    const cloneArr = [...arr];
    cloneArr.sort((a, b) => a-b);
    const minNum = cloneArr[0];
    
    let result = [];
    arr.forEach(val => {
        if (val !== minNum) result.push(val);
    });
    return result;
}