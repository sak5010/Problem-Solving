// 1. babbling 배열을 순회한다. 각 원소를 word라고 하자. 네 가지 발음 ["aya", "ye", "woo", "ma"]은 fourWord라 하자.
// 2. word에 fourWord가 하나씩 포함하는지 string.includes()로 확인한다. 포함 되면 word.length()를 저장한 변수 wordLength를 각 fourWord의 단어 수 만큼 뺀다.
// 3. fourWord 각각을 다 2번 과정을 했을 때 wordLength가 0이 되면 result를 1 증가 시킨다.
// 4. 1번 babbling 순회가 끝나면 result를 반환한다.
function solution(babbling) {
    const fourWord = ["aya", "ye", "woo", "ma"];
    let result = 0;
    babbling.forEach((word) => {
        let wordLength = word.length;
        fourWord.forEach((fw) => {
            if (word.includes(fw)) {
                wordLength -= fw.length;
            }
        });
        if (wordLength === 0) result++;
    });
    return result;
}