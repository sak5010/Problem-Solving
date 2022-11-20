function solution(num_list) {
    let [evenCnt, oddCnt] = [0, 0];
    num_list.forEach(num => {
        if (num%2===0) {
            evenCnt++;
        }
    });
    oddCnt = num_list.length - evenCnt;
    return [evenCnt, oddCnt];
}