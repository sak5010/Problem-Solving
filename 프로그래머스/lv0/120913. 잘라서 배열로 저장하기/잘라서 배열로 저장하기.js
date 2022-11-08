function solution(my_str, n) {
    let resultArray = [];
    while (my_str !== "") {
        resultArray.push(my_str.slice(0, n));
        my_str = my_str.slice(n);
    }
    return resultArray;
}