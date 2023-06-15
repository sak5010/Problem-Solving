// Math.floor(num / 2)만큼의 수 부터 오름차순으로 num의 개수 만큼 더했을 때 total이 되는지 찾으면 된다.
// total이 되는 녀석들을 배열에 담아 return
function solution(num, total) {
    let element = -Math.floor(num / 2);
    let leftElement = element;
    let sum = 0;
    let result = [];
    for (let i = 0; i < num; i++) {
        sum += element;
        result.push(element++);
    }
    while (true) {
        if (sum === total) return result;
        sum -= leftElement++;
        sum += element;
        result.shift();
        result.push(element++);
    }
}