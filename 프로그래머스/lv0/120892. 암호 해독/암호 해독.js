function solution(cipher, code) {
    let result = [];
    for (let i = code-1; i < cipher.length; i=i+code) {
        result.push(cipher.charAt(i));
    }
    return result.join("");
}