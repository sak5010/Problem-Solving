function solution(X, Y) {
    const arrayX = X.split('').map(Number).sort((a, b) => b - a);
    const arrayY = Y.split('').map(Number).sort((a, b) => b - a);
    
    const result = [];
    
    while (arrayX.length !== 0 && arrayY.length !== 0) {
        const x = arrayX[arrayX.length - 1];
        const y = arrayY[arrayY.length - 1];
        if (x === y) {
            result.push(x);
            arrayX.pop();
            arrayY.pop();
        }
        else if (x < y) arrayX.pop();
        else arrayY.pop();
    }
    result.sort((a, b) => b - a);
    if (result.length === 0) return "-1";
    else if (result[0] === 0) return "0";
    else return result.join("");
}

// 0 0 1
// 2 3 4 5

// 0 0 1
// 0 0 2 3 4 5

// 0 0 1
// 0 1 2 3 4 5

/*
    1. X와 Y를 한 자리 숫자를 원소로 가지는 배열로 만든 후 오름차순으로 정렬 해 놓는다.
    2. X와 Y를 처음부터 비교한다.
       - 두 원소가 같으면 result 배열에 넣고 다음 원소로 넘어간다.
       - 두 원소가 같지 않으면 작은 쪽의 배열의 다음 원소로 넘어간다.
    3. 2번에서 X와 Y 중 하나라도 끝까지 순회 했다면 result에 쌓인 배열을 확인한다.
       - result가 비어 있으면 -1을 리턴한다.
       - result에 0밖에 없으면 0을 리턴한다.
       - 그렇지 않으면 내림차순으로 정렬하여 리턴한다.
*/