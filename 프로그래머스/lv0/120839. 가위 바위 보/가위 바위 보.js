function solution(rsp) {
    const result = rsp.split('').map((c) => {
        if (c === '2') return 0;
        else if (c === '0') return 5;
        else return 2;
    });
    return result.join('');
}