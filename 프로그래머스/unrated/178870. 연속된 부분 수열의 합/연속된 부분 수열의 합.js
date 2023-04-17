// 투 포인터로 뒤에서 시작해서 푼다. 오름차순으로 정렬된 것을 이용.
function solution(sequence, k) {
    let left = sequence.length - 1;
    let right = left;
    const result = [-1, -1];
    let isFoundK = false;
    let leftRightSum = sequence[left];
    while (left >= 0) {
        if (leftRightSum === k) {
            result[0] = left;
            result[1] = right;
            isFoundK = true;
            if (left > 0 && right >= 0) {
                leftRightSum = leftRightSum + sequence[left-1] - sequence[right];   
            }
        } else {
            if (leftRightSum < k) {
                right++;
                if (left > 0) {
                    leftRightSum += sequence[left-1];   
                }
                if (isFoundK) break;
            } else {
                if (left > 0 && right >= 0) {
                    leftRightSum = leftRightSum + sequence[left-1] - sequence[right]; 
                }
            }
        }
        left--;
        right--;
    }
    return result;
}