// 1. emergency를 내림차순으로 정렬한 tempEmergency 배열을 만든다. (원본은 바뀌지 않도록 한다.)
// 2. tempEmergency을 순회하면서 각 원소를 key로 하여 index+1의 값으로 obj에 저장한다.
// 3. emergency를 순회하며 각 원소로 obj[key]에 접근하고 그 결과 값을 result 배열에 push한다.
// 4. result 배열 반환
function solution(emergency) {
    const tempEmergency = [...emergency].sort((a, b) => b - a);
    
    const obj = {};
    tempEmergency.forEach((key, index) => {
        obj[key] = index + 1;
    });
    
    const result = [];
    emergency.forEach((key) => {
        result.push(obj[key]);
    });
    return result;
}