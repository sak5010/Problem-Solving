const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const dequeuedNode = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeuedNode.next;
      dequeuedNode.next = null;
    }
    this.size--;
    return dequeuedNode.value;
  }
}

// 1. 불이 번지는 시간을 bfs로 2차원 배열에 적어 둔다. (불은 여러 개)
// 2. 지훈이가 탈출하는 시간을 bfs로 2차원 배열에 적어 둔다.
// 3. 가장자리를 보면서 '.' 이면서 지훈이가 탈출 할 수 있는(불이 번지는 시간보다 탈출하는 시간이 적은 경우) 경우 중 최소를 출력한다.
input = input.split("\n");
const [r, c] = input.shift().split(" ").map(Number);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const maze = input.map((line) => line.split(""));
const times1 = Array.from({ length: r }, () => new Array(c).fill(-1));
const times2 = Array.from({ length: r }, () => new Array(c).fill(-1));

// 불이 번지는 시간, 지훈이가 탈출하는 시간 구하기
let Q1 = new Queue();
let Q2 = new Queue();
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (maze[i][j] === "F") {
      Q1.enqueue([i, j]);
      times1[i][j] = 0;
    }
    if (maze[i][j] === "J") {
      Q2.enqueue([i, j]);
      times2[i][j] = 0;
    }
  }
}
// 불
while (Q1.size !== 0) {
  const [queuedX, queuedY] = Q1.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirX >= r || dirY < 0 || dirY >= c) continue;
    if (times1[dirX][dirY] >= 0 || maze[dirX][dirY] === "#") continue;
    Q1.enqueue([dirX, dirY]);
    times1[dirX][dirY] = times1[queuedX][queuedY] + 1;
  }
}
// 탈출
while (Q2.size !== 0) {
  const [queuedX, queuedY] = Q2.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirX >= r || dirY < 0 || dirY >= c) {
      console.log(times2[queuedX][queuedY] + 1);
      return;
    }
    if (times2[dirX][dirY] >= 0 || maze[dirX][dirY] !== ".") continue;
    if (
      times1[dirX][dirY] !== -1 &&
      times1[dirX][dirY] <= times2[queuedX][queuedY] + 1
    )
      continue;
    Q2.enqueue([dirX, dirY]);
    times2[dirX][dirY] = times2[queuedX][queuedY] + 1;
  }
}

console.log("IMPOSSIBLE");
