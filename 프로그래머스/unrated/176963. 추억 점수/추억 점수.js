// 1. name을 key로, yearning을 value로 하여 pointObj에 저장한다.
// 2. photo를 순회하며 이 결과에 따라 result에 배열로 추가한다. (테스트 케이스라 보면 된다.)
// 3. 각 photo의 원소에서 그 안쪽의 원소를 순회하며 obj에 key로 검색하고 점수를 합산하여 result에 넣을 sum을 만든다.
function solution(name, yearning, photo) {
    const pointObj = {};
    name.forEach((n, index) => {
        pointObj[n] = yearning[index];
    });
    const result = [];
    photo.forEach((p) => {
        let sum = 0;
        p.forEach((n) => {
            sum += (pointObj[n] || 0);
        });
        result.push(sum);
    });
    return result;
}