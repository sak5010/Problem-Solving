const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const MAX_LENGTH = 10;

const [n, m] = input.split(" ").map(Number);
const arr = new Array(MAX_LENGTH).fill(0);
const isUsed = new Array(MAX_LENGTH).fill(0);

const func = (k) => {
  // 현재 k개 까지 수를 택했음.
  if (k === m) {
    // m개 까지 수를 선택했으면 출력.
    const consoleSpace = [];
    for (let i = 0; i < m; i++) {
      consoleSpace.push(arr[i]);
    }
    console.log(consoleSpace.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    // 1부터 n까지의 수 중
    if (isUsed[i] === 0) {
      // 아직 사용되지 않은 수를 뽑는다.
      arr[k] = i; // k번째 수를 i로 정함.
      isUsed[i] = 1; // i는 사용되었다 표시.
      func(k + 1); // 다음 수를 정하러 한 단계 더 들어감.
      isUsed[i] = 0; // k번째 수에 i가 들어가는 모든 경우에 대해 다 확인 했으니 i를 이제 사용되지 않았다고 명시.
    }
  }
};

func(0);
