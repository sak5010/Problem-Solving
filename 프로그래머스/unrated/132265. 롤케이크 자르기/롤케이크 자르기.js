// 1. topping을 나누는 인덱스를 0으로 초기화 한다. v
// 2. topping의 첫 번째 원소는 obj1에 key로 등록하고, 나머지 원소들은 obj2에 key로 등록한다.(초기 value는 1) 원소가 중복되면 value를 1씩 더한다. v
// 3. obj1의 key length와 obj2의 key length를 비교해서 같으면 result를 1 증가시킨다. v
// 4. 1번에서 초기화한 나누는 인덱스를 1 증가시키고 topping에서 그 인덱스를 참조하여 obj1에는 key로 등록시키고(이미 있으면 1 증가) obj2에서는 key로 참조해 value를 1 제거한다. 그 value가 0이 되면 key 또한 제거한다. v
// 5. 3~ 4번을 1번 나누는 인덱스가 topping.length - 1이 되기 직전 까지 반복한다.
function solution(topping) {
    let devideIndex = 0;
    const obj1 = {};
    const obj2 = {};
    let obj1Length = 1;
    let obj2Length = 0;
    obj1[topping[0]] = 1;
    for (let i = 1; i < topping.length; i++) {
        if (obj2[topping[i]]) {
            obj2[topping[i]] += 1;
        } else {
            obj2[topping[i]] = 1;
            obj2Length++;
        }
    }
    let result = 0;
    while (devideIndex < topping.length - 1) {
        if (obj1Length === obj2Length) {
            result++;
        }
        devideIndex++;
        if (obj1[topping[devideIndex]]) {
            obj1[topping[devideIndex]] += 1;
        } else {
            obj1[topping[devideIndex]] = 1;
            obj1Length++;
        }
        obj2[topping[devideIndex]] -= 1;
        if (obj2[topping[devideIndex]] === 0) {
            delete obj2[topping[devideIndex]];
            obj2Length--;
        }
    }
    return result;
}