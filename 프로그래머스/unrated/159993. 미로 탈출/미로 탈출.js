// 1. start에서 lever까지의 최소 seconds를 구한다.
// 2. lever를 start로 하여 exit까지의 seconds를 구한다.
// 3. 1번과 2번 seconds를 더하면 최종 결과 시간이 된다.
function solution(maps) {
    let copiedMap = maps.map((line) => line.split(''));
    
    const n = copiedMap.length;
    const m = copiedMap[0].length;
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    // start, lever, end 찾기
    let startX, startY;
    let leverX, leverY;
    let endX, endY;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (copiedMap[i][j] === "S") {
                startX = i;
                startY = j;
            } else if (copiedMap[i][j] === "L") {
                leverX = i;
                leverY = j;
            } else if (copiedMap[i][j] === "E") {
                endX = i;
                endY = j;
            }
        }
    }
    // 1번 과정
    let distances = Array.from({length: n}, () => new Array(m).fill(-1));
    let secondsOfStartToLever = 0;
    let queue = [];
    queue.push([startX, startY]);
    copiedMap[startX][startY] = "V";
    distances[startX][startY] = 0;
    while (queue.length !== 0) {
        const [queuedX, queuedY] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
            const dirX = queuedX + dx[dir];
            const dirY = queuedY + dy[dir];
            if (dirX < 0 || dirX >= n || dirY < 0 || dirY >= m) continue;
            if (copiedMap[dirX][dirY] === "X" || copiedMap[dirX][dirY] === "V") continue;
            queue.push([dirX, dirY]);
            copiedMap[dirX][dirY] = "V";
            distances[dirX][dirY] = distances[queuedX][queuedY] + 1;
        }
    }
    secondsOfStartToLever = distances[leverX][leverY];
    
    // 2번 과정
    copiedMap = maps.map((line) => line.split(''));
    distances = Array.from({length: n}, () => new Array(m).fill(-1));
    let secondsOfLeverToEnd = 0;
    queue = [];
    queue.push([leverX, leverY]);
    copiedMap[leverX][leverY] = "V";
    distances[leverX][leverY] = 0;
    while (queue.length !== 0) {
        const [queuedX, queuedY] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
            const dirX = queuedX + dx[dir];
            const dirY = queuedY + dy[dir];
            if (dirX < 0 || dirX >= n || dirY < 0 || dirY >= m) continue;
            if (copiedMap[dirX][dirY] === "X" || copiedMap[dirX][dirY] === "V") continue;
            queue.push([dirX, dirY]);
            copiedMap[dirX][dirY] = "V";
            distances[dirX][dirY] = distances[queuedX][queuedY] + 1;
        }
    }
    secondsOfLeverToEnd = distances[endX][endY];
    
    if (secondsOfStartToLever === -1 || secondsOfLeverToEnd === -1) return -1;
    return secondsOfStartToLever + secondsOfLeverToEnd;
}