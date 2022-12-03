function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const mappedString = my_string.split('').map((char) => {
        if (vowel.includes(char)) {
            return '';
        }
        return char;
    });
    return mappedString.join('');
}