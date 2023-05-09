// 1. result배열을 numbers의 갯수만큼 원소를 0으로 채운다.
// 2. numbers의 각 원소를 값으로 하고 각 인덱스를 key로 하는 [index, value] pair를 원소로 stack에 쌓는 반복문을 만든다.
//    numbers를 다 순회할 때 까지 반복한다.
//    stack에 쌓으면서 top과 비교한다.
//    2-1 넣으려는 값이 top보다 작으면 그냥 push한다.
//    2-2 넣으려는 값이 top보다 크면 top의 인덱스로 result배열에 접근해서 넣으려는 값을 result배열에 넣는다.
//        이후 stack을 pop하고 top과 또 비교한다.
//    2-3 넣으려는 값이 또 top보다 크면 이 과정(2-2)을 반복한다.
//        넣으려는 값이 top보다 작으면 그냥 push한다.
// 3. numbers를 모두 순회 했으면 stack을 비우면서 각 인덱스로 result배열에 접근해 -1로 채운다.
function solution(numbers) {
    const result = new Array(numbers.length).fill(0);
    const stack = [];
    numbers.forEach((number, index) => {
        if (stack.length === 0 || number < stack[stack.length-1][1]) {
            stack.push([index, number]);
        } else {
            while (stack.length !== 0 && number > stack[stack.length-1][1]) {
                result[stack[stack.length-1][0]] = number;
                stack.pop();
            }
            stack.push([index, number]);
        }
    });
    while (stack.length !== 0) {
        const [index, number] = stack.pop();
        result[index] = -1;
    }
    return result;
}