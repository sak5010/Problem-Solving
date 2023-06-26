function solution(food) {
    result = [0];
    for (let i = food.length - 1; i > 0; i--) {
        while (food[i] > 1) {
            result.unshift(i);
            result.push(i);
            food[i] -= 2;
        }
    }
    return result.join('');
}