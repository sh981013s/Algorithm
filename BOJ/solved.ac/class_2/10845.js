"use strict";

(() => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    push(val) {
      const newNode = new Node(val);
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }

    pop() {
      if (this.size === 0) {
        return -1;
      } else {
        const headVal = this.head.val;
        this.head = this.head.next;
        this.size--;
        return headVal;
      }
    }

    getSize() {
      return this.size;
    }

    isEmpty() {
      if (this.size === 0) {
        return 1;
      } else {
        return 0;
      }
    }

    front() {
      if (this.size === 0) {
        return -1;
      } else {
        return this.head.val;
      }
    }

    back() {
      if (this.size === 0) {
        return -1;
      } else {
        return this.tail.val;
      }
    }
  }

  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(" "));
  const ans = [];
  const queue = new Queue();

  for (let cmd of realInput) {
    switch (cmd[0]) {
      case "push":
        queue.push(cmd[1]);
        break;
      case "pop":
        ans.push(queue.pop());
        break;
      case "size":
        ans.push(queue.getSize());
        break;
      case "empty":
        ans.push(queue.isEmpty());
        break;
      case "front":
        ans.push(queue.front());
        break;
      case "back":
        ans.push(queue.back());
        break;
    }
  }

  console.log(ans.join("\n"));
})();
