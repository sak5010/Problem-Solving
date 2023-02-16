// 1. goal의 맨 앞에있는 원소부터 뽑으면서 cards1, cards2의 맨 앞에 있는 원소와 비교한다.
//    일치하는게 있으면 일치하는 두 원소를 제거한다.
// 2. 일치하는게 하나도 없으면 바로 No를 리턴한다.
// 3. goal을 모두 순회한다면 Yes를 리턴한다.
function solution(cards1, cards2, goal) {
    while (goal.length !== 0) {
        if (goal[0] === cards1[0]) {
            goal.shift();
            cards1.shift();
        } else if (goal[0] === cards2[0]) {
            goal.shift();
            cards2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}