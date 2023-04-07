const isHamberger = (table) => {
    if (table[table.length-4]===1 && table[table.length-3]===2 && table[table.length-2]===3
        && table[table.length-1]===1) {
        return true;
    }
    return false;
}

const fourPop = (table) => {
    table.pop();
    table.pop();
    table.pop();
    table.pop();
}

function solution(ingredient) {
    // 1. ingredient에 있는 재료를 하나씩 꺼내며 조리대(table)에 넣는다.
    // 2. table에 4개 이상의 재료가 있으면 가장 나중에 넣은 4개의 재료를 비교해서
    //    햄버거(1,2,3,1)를 만들 수 있는지 확인한다.
    // 3. 햄버거를 만들 수 있으면 4개를 pop하고 result를 1 증가시킨다.
    // 4. ingredient가 다 소모될 때 까지 반복한다.
    const table = [];
    let result = 0;
    ingredient.forEach((ingre) => {
        table.push(ingre);
        if (table.length >= 4) {
            if (isHamberger(table)) {
                fourPop(table);
                result++;
            }
        }
    });
    return result;
}