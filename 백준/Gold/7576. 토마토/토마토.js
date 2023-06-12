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

input = input.split("\n");
const [m, n] = input.shift().split(" ").map(Number);
const box = input.map((line) => line.split(" ").map(Number));
const days = Array.from({ length: n }, () => new Array(m).fill(0));

const queue = new Queue();
// 1. 익은 토마토를 전부 queue에 넣는다.
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) queue.enqueue([i, j]);
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let minDay = 0;
// 2. 익은 토마토들을 queue에서 빼내며 days 2차원 배열을 bfs로 채운다.
while (queue.size !== 0) {
  const [queuedX, queuedY] = queue.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirY < 0 || dirX >= n || dirY >= m) continue;
    if (box[dirX][dirY] !== 0) continue;
    queue.enqueue([dirX, dirY]);
    box[dirX][dirY] = 1;
    days[dirX][dirY] = days[queuedX][queuedY] + 1;
  }
  minDay = Math.max(minDay, days[queuedX][queuedY]);
}

// 3. box를 확인했을 때 0이 아직도 남아 있다면 -1을 출력, 아니면 minDay를 출력.
let isImpossible = false;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (box[i][j] === 0) {
      isImpossible = true;
    }
  }
}

console.log(isImpossible ? -1 : minDay);
