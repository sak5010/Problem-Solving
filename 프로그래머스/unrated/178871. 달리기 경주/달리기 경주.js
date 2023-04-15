const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function solution(players, callings) {
    // players의 원소 인덱스를 바로 찾을 수 있는게 시간초과를 하지 않는 관건. 이를 돕기 위해 obj(hash)를 이용한다.
    // 1. players를 순회하며 값을 key로 하는 객체(playerRank)를 만들고 등수(인덱스)를 값으로 저장한다.
    // 2. callings를 순회하며 각각 call의 값에 접근해 등수(인덱스)를 알아내고, 그 등수(인덱스) - 1의 값을 가진 녀석을 frontPlayerIndex에 저장한다.
    // 3. playerRank에서 등수 조절을 한다. 앞선놈 -1, 지금놈 +1
    // 4. players[frontPlayerIndex]에는 지금놈+1한 값을 넣고, players[frontPlayerIndex+1]에는 앞선놈-1한 값을 넣는다.
    const playerRank = {};
    players.forEach((player, index) => {
        playerRank[player] = index;
    });
    callings.forEach((call) => {
        const currentPlayerIndex = playerRank[call];
        const frontPlayerIndex = currentPlayerIndex - 1;
        const currentPlayer = players[currentPlayerIndex];
        const frontPlayer = players[frontPlayerIndex];
        playerRank[currentPlayer] -= 1;
        playerRank[frontPlayer] += 1;
        swap(players, currentPlayerIndex, frontPlayerIndex);
    });
    return players;
}