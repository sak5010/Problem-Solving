function solution(num_list) {
    const lastElement = num_list[num_list.length-1];
    const secondLastElement = num_list[num_list.length-2];
    let addedElement;
    if (lastElement > secondLastElement) addedElement = lastElement - secondLastElement;
    else addedElement = lastElement * 2;
    num_list.push(addedElement);
    return num_list;
}