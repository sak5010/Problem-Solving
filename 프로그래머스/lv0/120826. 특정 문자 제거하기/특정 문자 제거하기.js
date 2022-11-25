function solution(my_string, letter) {
    let result = [];
    my_string.split("").forEach(c => {
        if (c !== letter) {
            result.push(c);
        }
    });
    return result.join("");
}