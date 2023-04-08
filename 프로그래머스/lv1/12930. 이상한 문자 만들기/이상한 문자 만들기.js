function solution(s) {
    let sArr = s.split(' ');
    let startSpace = '';
    let endSpace = '';
    sArr.forEach((word, idx) => {
        let newWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i%2 === 0) {
                newWord += word[i].toUpperCase();
            } else {
                newWord += word[i].toLowerCase();
            }
        }
        sArr[idx] = newWord;
    });
    return startSpace + sArr.join(' ') + endSpace;
}