function solution(keymap, targets) {
    // 1. targets의 원소 하나(target)를 기준으로 시작한다. 이 원소가 끝나면 result배열에 결과를 하나씩 추가한다.
    // 2. target의 문자 하나씩 순회하며 이 문자를 입력하는데 최소 몇번의 키를 눌러야 하는지 파악한다.
    //    keymap의 원소들을 동시에 문자를 하나 하나 순회한다. 순회하면서 입력횟수는 증가한다.
    //    target의 문자와 일치하는 문자가 있으면 누른 횟수를 누적한다.
    //    keymap을 다 순회했는데 누른 횟수가 0이면 result에 -1을 넣는다.
    // 3. target을 다 돌면 결과 result를 result배열에 넣는다.
    const result = [];
    targets.forEach((target) => {
        let totalInputCount = 0;
        for (let targetChar of target) {
            let numOfInput = 101;
            keymap.forEach((key, idx) => {
                if (key.indexOf(targetChar) !== -1 && key.indexOf(targetChar) + 1 < numOfInput) {
                    numOfInput = key.indexOf(targetChar) + 1;
                }
            });
            if (numOfInput !== 101) {
                totalInputCount += numOfInput;
            } else {
                totalInputCount = 0;
                break;
            }
        }
        result.push(totalInputCount === 0 ? -1 : totalInputCount);
    });
    return result;
}