function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => b-a);
    const popCount = score.length % m;
    for (let i = 0; i < popCount; i++) {
        score.pop();
    }
    while (score.length > 0) {
        const appleBox = [];
        for (let i = 0; i < m; i++) {
            const n = score.pop();
            appleBox.push(n);
        }
        result += appleBox[0] * m;
    }
    return result;
}