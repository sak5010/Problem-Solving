const getGCD = (denom, numer) => {
    // 두 수 중 더 작은 값 부터 시작해서 나눠보고 나누어 떨어지면 그 녀석이 gcd.
    // 한 번도 나누어 떨어지지 않으면 1 반환.
    let gcdCandidate = Math.min(numer, denom);
    for (let i = gcdCandidate; i >= 1; i--) {
        if (numer % i === 0 && denom % i === 0) {
            return i;
        }
    }
    return 1;
}

function solution(numer1, denom1, numer2, denom2) {
    // 1. 분수 덧셈
    // 2. 분모, 분자 최대공약수로 나누기
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    const gcd = getGCD(numer, denom);
    numer /= gcd;
    denom /= gcd;
    return [numer, denom];
}