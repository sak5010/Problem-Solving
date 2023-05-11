// 1. s문자열을 순회한다. 각 문자는 c.
// 2. 첫 번째 문자를 담는 변수 firstChar가 비어있으면 첫 번째 문자를 담고, 첫 번째 문자의 갯수를 세는 cnt1을 1 증가시킨다.
//    firstChar가 비어있지 않으면 firstChar와 c를 비교해서 같으면 cnt1을 1 증가시키고 다르면 cnt2를 1 증가시킨다.
// 3. cnt1과 cnt2가 같으면 result를 1 증가시키고, firstChar를 비운다.
// 4. 모든 순회가 끝났으면 firstChar가 비어있는지 확인한다. 비어있으면 result를 1 증가시킨다.
// 5. result를 반환한다.
function solution(s) {
    let firstChar = "";
    let cnt1 = 0;
    let cnt2 = 0;
    let result = 0;
    for (let c of s) {
        if (firstChar === "") {
            firstChar = c;
            cnt1++;
        } else {
            if (firstChar === c) cnt1++;
            else cnt2++;
        }
        if (cnt1 === cnt2) {
            result++;
            firstChar = "";
        }
    }
    if (firstChar !== "") result++;
    return result;
}