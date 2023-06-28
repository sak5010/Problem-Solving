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

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const [r, c] = input.shift().split(" ").map(Number);
const maze = input.map((line) => line.split(""));
const days1 = Array.from({ length: r }, () => new Array(c).fill(-1));
const days2 = Array.from({ length: r }, () => new Array(c).fill(-1));

const q1 = new Queue();
const q2 = new Queue();

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (maze[i][j] === "F") {
      q1.enqueue([i, j]);
      days1[i][j] = 0;
    } else if (maze[i][j] === "J") {
      q2.enqueue([i, j]);
      days2[i][j] = 0;
    }
  }
}

while (q1.size !== 0) {
  const [queuedX, queuedY] = q1.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirX >= r || dirY < 0 || dirY >= c) continue;
    if (days1[dirX][dirY] >= 0 || maze[dirX][dirY] === "#") continue;
    q1.enqueue([dirX, dirY]);
    days1[dirX][dirY] = days1[queuedX][queuedY] + 1;
  }
}

while (q2.size !== 0) {
  const [queuedX, queuedY] = q2.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const dirX = queuedX + dx[dir];
    const dirY = queuedY + dy[dir];
    if (dirX < 0 || dirX >= r || dirY < 0 || dirY >= c) {
      console.log(days2[queuedX][queuedY] + 1);
      return;
    }
    if (days2[dirX][dirY] >= 0 || maze[dirX][dirY] === "#") continue;
    if (
      days1[dirX][dirY] !== -1 &&
      days1[dirX][dirY] <= days2[queuedX][queuedY] + 1
    )
      continue;
    q2.enqueue([dirX, dirY]);
    days2[dirX][dirY] = days2[queuedX][queuedY] + 1;
  }
}

console.log("IMPOSSIBLE");
