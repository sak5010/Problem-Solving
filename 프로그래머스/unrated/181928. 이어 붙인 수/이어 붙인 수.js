function solution(num_list) {
    let odds= [], evens = [];
    num_list.forEach((num) => {
        if (num%2 === 0) evens.push(num);
        else odds.push(num);
    });
    return Number(evens.join('')) + Number(odds.join(''));
}