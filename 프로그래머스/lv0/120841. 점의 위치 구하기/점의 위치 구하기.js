function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    const isOne = x > 0 && y > 0;
    const isTwo = x < 0 && y > 0;
    const isThree = x < 0 && y < 0;
    const isFour = x > 0 && y < 0;
    if (isOne) return 1;
    if (isTwo) return 2;
    if (isThree) return 3;
    if (isFour) return 4;
}