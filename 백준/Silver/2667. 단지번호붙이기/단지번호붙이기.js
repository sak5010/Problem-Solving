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

// 1. for문 돌면서 1 발견하면 bfs 돌림. 2로 채움. 끝나면 result 배열에 단지 크기 넣음.
// 2. 단지 수 출력, 단지 크기 오름차순으로 출력.
input = input.split("\n");
const n = Number(input.shift());
const map = input.map((line) => line.split("").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const q = new Queue();
const result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let sizeOfComplex = 0;
    if (map[i][j] === 1) {
      q.enqueue([i, j]);
      map[i][j] = 2;
      sizeOfComplex++;
      while (q.size !== 0) {
        const [queuedX, queuedY] = q.dequeue();
        for (let dir = 0; dir < 4; dir++) {
          const nx = queuedX + dx[dir];
          const ny = queuedY + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (map[nx][ny] === 2 || map[nx][ny] === 0) continue;
          q.enqueue([nx, ny]);
          map[nx][ny] = 2;
          sizeOfComplex++;
        }
      }
      result.push(sizeOfComplex);
    }
  }
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((r) => console.log(r));
