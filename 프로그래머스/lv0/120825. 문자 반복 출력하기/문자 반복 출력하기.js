function solution(my_string, n) {
    let result = "";
    for (let i = 0; i < my_string.length; i++) {
        result += my_string.charAt(i).repeat(n);
    }
    return result;
}