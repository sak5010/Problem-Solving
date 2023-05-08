"use strict";
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = input.split("\n");
input.shift();

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

  isEmpty() {
    if (this.size === 0) return 1;
    else return 0;
  }
}

const queue = new Queue();
const result = [];

input.forEach((order) => {
  const [o1, o2] = order.split(" ");
  if (o2) {
    queue.enqueue(o2);
  } else {
    switch (o1) {
      case "pop":
        if (queue.isEmpty()) {
          result.push(-1);
        } else {
          result.push(queue.dequeue());
        }
        break;
      case "size":
        result.push(queue.size);
        break;
      case "empty":
        result.push(queue.isEmpty());
        break;
      case "front":
        if (!queue.first) {
          result.push(-1);
        } else {
          result.push(queue.first.value);
        }
        break;
      case "back":
        if (!queue.last) {
          result.push(-1);
        } else {
          result.push(queue.last.value);
        }
        break;
    }
  }
});
console.log(result.join("\n"));
