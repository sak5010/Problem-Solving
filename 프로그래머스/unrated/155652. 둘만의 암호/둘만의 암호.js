const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] > val) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  if (arr[middle] === val) return middle;
  return -1;
};

function solution(s, skip, index) {
    // 1. a~z까지의 배열을 만든다.
    // 2. skip에 포함된 알파벳들을 1번 배열에서 제외한다.
    // 3. s에 담긴 char들을 하나씩 index만큼 2번 배열에서 더해준다. 길이를 초과하면 다시 처음으로 돌면서.
    // 4. 완성된 배열을 result에 담아 출력.
    const arrayAtoZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
                       'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    skip.split('').forEach((c) => {
        const skipCharIndex = binarySearch(arrayAtoZ, c);
        arrayAtoZ.splice(skipCharIndex, 1);
    });
    let result = "";
    s.split('').forEach((c) => {
        const plusCharIndex = binarySearch(arrayAtoZ, c);
        result += arrayAtoZ[(plusCharIndex + index) % arrayAtoZ.length];
    });
    return result;
}