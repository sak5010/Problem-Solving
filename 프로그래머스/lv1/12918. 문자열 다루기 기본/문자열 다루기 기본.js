function solution(s) {
    // 1. 문자열 s를 내림차순 정렬한다.
    // 2. 맨 앞에 문자가 알파벳이라면 false를 반환하고 숫자면 true를 반환한다.
    // isNaN()를 활용한다.
    // 3. 문자열의 길이가 4 또는 6이 아니면 false를 반환한다.
    if (!(s.length === 4 || s.length === 6)) {
        return false;
    }
    s = s.split('').sort();
    s.reverse();
    if (isNaN(s[0])) {
        return false;
    } else {
        return true;
    }
}