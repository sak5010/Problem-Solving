// 1. 24시간+10분 까지의 분단위 인덱스를 가지는 0으로 초기화 된 배열을 만든다. v
// 2. book_time을 정제하여 분으로 만들고 1번에서 만든 배열에 입실 시간은 1, 퇴실 시간 +10(청소)에는 -1을 넣는다. v
// 3. 누적합을 한다.
// 4. 배열에서 가장 큰 값을 찾아 반환한다.
const MAX_TIME = 24*60+10;
const CLEAN_TIME = 10;

const timeTable = new Array(MAX_TIME + 1).fill(0);

const calTime = (time) => {
    const [startTime, endTime] = time.map((t) => {
        const [hours, minutes] = t.split(':').map(Number);
        return hours * 60 + minutes;
    });
    return [startTime, endTime];
}

function solution(book_time) {
    book_time.forEach((time) => {
        const [startTime, endTime] = calTime(time);
        timeTable[startTime] += 1;
        timeTable[endTime + CLEAN_TIME] += -1; // 원래 누적 합 이라면 1을 더하겠지만 문제 특성 상 pass
    });
    
    for (let i = 1; i <= MAX_TIME + 1; i++) {
        timeTable[i] += timeTable[i - 1];
    }
    
    let max = 0;
    timeTable.forEach((time) => {
        if (time > max) max = time;
    });
    return max;
}