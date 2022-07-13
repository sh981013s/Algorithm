class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.tail = this.head = newNode;
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
      const val = this.head.val;
      this.head = this.head.next;
      this.size--;
      return val;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    if (this.head === null) {
      return -1;
    } else {
      return this.head.val;
    }
  }

  back() {
    if (this.head === null) {
      return -1;
    } else {
      return this.tail.val;
    }
  }
}

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((arr) => arr.split(" "));

const queue = new Queue();
const ans = [];

for (let arr of input) {
  switch (arr[0]) {
    case "push":
      queue.push(arr[1]);
      break;
    case "pop":
      ans.push(queue.pop(arr[1]));
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
