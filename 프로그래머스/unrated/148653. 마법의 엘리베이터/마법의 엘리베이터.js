function solution(storey) {
    // 더하면 앞의 숫자를 1 더한다.
    // 1. 5보다 작으면 빼고 5보다 크면 더한다.
    // 2. 5면 앞의 숫자가 5이하면 뺀다. 앞의 숫자가 5보다 크면 더한다.
    // 3. 5고 앞의 숫자가 5면 더한다.
    const arr = storey.toString().split('').map(Number).reverse();
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < 5) {
            result += arr[i];
        } else if (arr[i] > 5) {
            result += 10 - arr[i];
            arr[i + 1] += 1;
        } else {
            if (arr[i + 1] < 5) {
                result += arr[i];
            } else {
                result += 10 - arr[i];
                arr[i + 1] += 1;
            }
        }
    }
    if (arr[arr.length - 1] < 6) {
        result += arr[arr.length - 1];
    } else {
        result += 10 - arr[arr.length - 1];
        result += 1;
    }
    return result;
}