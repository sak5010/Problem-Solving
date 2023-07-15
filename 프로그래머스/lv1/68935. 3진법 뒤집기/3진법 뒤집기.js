function solution(n) {
    let three = [];
    while (n >= 3) {
        const quotient = Math.floor(n / 3);
        const remainder = n % 3;
        n = quotient;
        three.push(remainder);
    }
    if (n > 0) three.push(n);
    
    three.reverse();
    let ten = 0;
    for (let i = 0; i < three.length; i++) {
        ten += three[i] * Math.pow(3, i);
    }
    return ten;
}