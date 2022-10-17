function solution(s){
    var answer = true;

    s = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "p") pCnt++;
        else if (s.charAt(i) === "y") yCnt++;
    }
    if (pCnt !== yCnt) answer = false;

    return answer;
}