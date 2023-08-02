const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const _bar = (str, stk) => {
  let consoleSpace = "";
  for (let i = 0; i < stk; i++) {
    consoleSpace += "____";
  }
  return (consoleSpace += str);
};

const func = (cnt) => {
  console.log(_bar(`"재귀함수가 뭔가요?"`, cnt));
  if (cnt === n) {
    console.log(_bar(`"재귀함수는 자기 자신을 호출하는 함수라네"`, cnt));
  } else {
    console.log(
      _bar(
        `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
        cnt
      )
    );
    console.log(
      _bar(
        `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,
        cnt
      )
    );
    console.log(
      _bar(
        `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
        cnt
      )
    );
    func(cnt + 1);
  }
  console.log(_bar("라고 답변하였지.", cnt));
};

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
func(0);
