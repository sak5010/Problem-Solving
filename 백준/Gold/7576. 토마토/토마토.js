"use strict";
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

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = new Queue();
let isAllRipened = true;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) {
      queue.enqueue([i, j]);
      box[i][j] = 1;
    } else if (box[i][j] === 0) {
      isAllRipened = false;
    }
  }
}

if (isAllRipened) {
  console.log(0);
  return;
}

while (queue.size !== 0) {
  const [queuedX, queuedY] = queue.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirX >= n || dirY < 0 || dirY >= m) continue;
    if (box[dirX][dirY] !== 0) continue;
    queue.enqueue([dirX, dirY]);
    box[dirX][dirY] = 1;
    days[dirX][dirY] = days[queuedX][queuedY] + 1;
  }
}

let maxDay = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 0) {
      console.log(-1);
      return;
    }
    maxDay = Math.max(maxDay, days[i][j]);
  }
}

console.log(maxDay);
