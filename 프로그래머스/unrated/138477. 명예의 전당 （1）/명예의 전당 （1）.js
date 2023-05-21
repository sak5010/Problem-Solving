const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
		let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
};

function solution(k, score) {
    const result = [];
    const honor = [];
    for (let i = 0; i < k; i++) {
        if (score.length > i) {
            honor.push(score[i]);
            insertionSort(honor);
            result.push(honor[0]);
        }
    }
    for (let i = k; i < score.length; i++) {
        honor.push(score[i]);
        insertionSort(honor);
        honor.shift();
        result.push(honor[0]);
    }
    return result;
}