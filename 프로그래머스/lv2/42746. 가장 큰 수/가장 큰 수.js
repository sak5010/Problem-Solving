function solution(numbers) {
    // a + b > b + a 이면 return -1
    const stringNumbers = numbers.map((number) => number.toString());
    const resultArray = stringNumbers.sort((a, b) => {
        if (a + b > b + a) {
            return -1;
        } else {
            return 1;
        }
    });
    let result = resultArray.join('');
    if (result.length > 1 && result.charAt(0) === "0") {
        result = "0";
    }
    return result;
}