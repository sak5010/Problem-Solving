function solution(my_string) {
    let result = [];
    my_string.split('').forEach((c) => {
        if (!result.includes(c)) {
            result.push(c);
        }
    });
    return result.join('');
}