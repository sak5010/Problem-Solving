// 기울기 공식: (y2 - y1) / (x2 - x1)
const findSlope = (dot1, dot2) => {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
    if (findSlope(dots[0], dots[1]) === findSlope(dots[2], dots[3])) {
        return 1;
    }
    if (findSlope(dots[0], dots[2]) === findSlope(dots[1], dots[3])) {
        return 1;
    }
    if (findSlope(dots[0], dots[3]) === findSlope(dots[1], dots[2])) {
        return 1;
    }
    return 0;
}