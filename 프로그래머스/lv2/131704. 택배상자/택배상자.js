// container는 스택이다. result의 초기 값은 0이다.
// 1. order에 있는 숫자가 스택에 있는지 확인한다.
// 2. 없으면 스택을 추가한다. 이 때, 오름차순으로 스택이 추가되므로 추가 된 값이 현재 보고 있는 order 값보다 크다면 더 이상 미래는 없으므로 result를 그대로 반환한다.
// 3. 있으면 스택에서 pop을 하고 order의 인덱스를 1 증가시킨다. 이 3번 작업을 order와 스택에서 뺄 값이 일치하지 않을 때 까지 반복한다.
// 4. order를 다 순회하면 result를 반환한다.
function solution(order) {
    const container = [1];
    let boxNumber = 2;
    let result = 0;
    let orderIndex = 0;
    while (orderIndex < order.length) {
        if (order[orderIndex] === container[container.length-1]) {
            container.pop();
            result++;
            orderIndex++;
        } else {
            if (order[orderIndex] < boxNumber) return result;
            container.push(boxNumber++);
        }
    }
    return result;
}