function solution(n, lost, reserve) {
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    reserve.forEach((res, idx) => {
        if (lost.length === 0) return;
        let foundIndex;
        if (lost.includes(res)) {
            foundIndex = lost.findIndex((x) => x === res);
        }
        if (foundIndex >= 0) {
            lost[foundIndex] = -1;
            reserve[idx] = -1;
        }
    });
    
    reserve.forEach((res, idx) => {
        if (lost.length === 0) return;
        let foundIndex;
        if (lost.includes(res - 1)) {
            foundIndex = lost.findIndex((x) => x === res - 1);
        } else if (lost.includes(res + 1)) {
            foundIndex = lost.findIndex((x) => x === res + 1);
        }
        if (foundIndex >= 0) {
            lost[foundIndex] = -1;
        }
    });
    
    let count = 0;
    lost.forEach((l) => {
        if (l > 0) count++;
    });
    
    return n - count;
}