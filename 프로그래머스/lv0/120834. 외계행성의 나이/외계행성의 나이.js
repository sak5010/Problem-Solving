function solution(age) {
    let result = "";
    age.toString().split('').forEach((a) => {
        result += String.fromCharCode(97 + Number(a));
    });
    return result;
}