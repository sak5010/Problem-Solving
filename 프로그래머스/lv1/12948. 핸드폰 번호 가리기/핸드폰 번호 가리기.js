function solution(phone_number) {
    return [...phone_number].map((n, i) => {
        if (i < phone_number.length - 4) {
            return '*';
        }
        return n;
    }).join('');
}