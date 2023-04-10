function solution(citations) {
    // 1. result의 초기값은 0이다. h의 초기값은 1이다.
    // 2. citations의 각 원소를 순회하면서 그 수가 h 이상이면 cnt를 증가시킨다.
    // 3. citations를 다 순회하면 h와 cnt를 비교한다.
    //    cnt가 h보다 작으면 result를 반환한다.
    //    cnt가 h 이상이면 result를 1 더하고 h를 1 증가하고 다시 2번을 반복한다.
    let result = 0;
    let h = 1;
    while (true) {
        let cnt = 0;
        citations.forEach((citation) => {
            if (citation >= h) cnt++;
        });
        if (h > cnt) return result;
        else {
            result++;
            h++;
        }
    }
}