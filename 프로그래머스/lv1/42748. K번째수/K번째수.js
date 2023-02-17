const doCommand = (arr, command) => {
    const [ i, j, k ] = [command[0], command[1], command[2]];
    return arr.slice(i-1, j).sort((a,b) => a-b)[k-1];
}

// commands의 원소를 하나씩 순회하며 array에 명령을 적용하고 그 결과를 result 배열에 넣는다.
function solution(array, commands) {
    const result = [];
    commands.forEach((command) => {
        result.push(doCommand(array, command))
    });
    return result;
}