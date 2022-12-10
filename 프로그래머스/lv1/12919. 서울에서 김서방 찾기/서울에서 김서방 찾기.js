function solution(seoul) {
    let found = "";
    seoul.forEach((char, idx) => {
        if(char === "Kim") found = idx;
    });
    return `김서방은 ${found}에 있다`;
}