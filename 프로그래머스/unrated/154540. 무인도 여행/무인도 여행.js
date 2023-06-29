// bfs로 진행하면서 식량의 합을 result 배열에 넣어 두고 오름차순으로 반환
function solution(maps) {
    const map = maps.map((line) => line.split(''));
    const n = map.length;
    const m = map[0].length;
    
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const q = [];
    const result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let foodSum = 0;
            if (map[i][j] !== "X") {
                q.push([i, j]);
                foodSum += Number(map[i][j]);
                map[i][j] = "X";
                while (q.length !== 0) {
                    const [queuedX, queuedY] = q.shift();
                    for (let dir = 0; dir < 4; dir++) {
                        const nx = queuedX + dx[dir];
                        const ny = queuedY + dy[dir];
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                        if (map[nx][ny] === "X") continue;
                        q.push([nx, ny]);
                        foodSum += Number(map[nx][ny]);
                        map[nx][ny] = "X";
                    }
                }
                result.push(foodSum);
            }
        }
    }
    if (result.length === 0) result.push(-1);
    return result.sort((a, b) => a - b);
}