// canSpeak = ["aya", "ye", "woo", "ma"]
// babbling 배열의 원소 babble을 하나씩 검사하여 말 할 수 있으면 result를 1 증가 시킨다.
// 각 babble에 대해서 알고리즘은 다음과 같다.
// 1. babble에 canSpeak의 단어로 2번 반복되는게 있으면 break.
// 2. canSpeak으로 split을 한다.
// 3. ' '을 기준으로 join 해준다.
// 4. ' '으로 split하고 ''으로 join한 문자열의 길이가 0이면 result를 1 증가시킨다.
// 최종 result를 반환한다.
function solution(babbling) {
    const canSpeak = ["aya", "ye", "woo", "ma"];
    let result = 0;
    for (let i = 0; i < babbling.length; i++) {
        let babble = babbling[i];
        for (let speak of canSpeak) {
            if (babble.includes(speak.repeat(2))) break;
            babble = babble.split(speak).join(' ');
        }
        console.log(babble);
        if (babble.split(' ').join('').length === 0) result++;
    }
    return result;
}