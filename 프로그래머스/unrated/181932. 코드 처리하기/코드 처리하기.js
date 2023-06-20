function solution(code) {
    let mode = 0;
    const ret = [];
    code.split('').forEach((c, idx) => {
        if (mode === 0) {
            if (c !== "1") {
                if (idx%2 === 0) ret.push(c);
            } else {
                mode = 1;
            }
        } else {
            if (c !== "1") {
                if (idx%2 !== 0) ret.push(c);
            } else {
                mode = 0;
            }
        }
    });
    return ret.length === 0 ? "EMPTY" : ret.join('');
}