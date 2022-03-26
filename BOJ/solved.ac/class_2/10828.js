"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class LinkedStack {
    constructor() {
      this.top = null;
      this.size = 0;
    }

    push(val) {
      const newNode = new Node(val);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }

    pop() {
      if (this.size === 0) {
        return -1;
      } else {
        const headVal = this.top.val;
        this.top = this.top.next;
        this.size--;
        return headVal;
      }
    }

    getSize() {
      return this.size;
    }

    empty() {
      if (this.size === 0) {
        return 1;
      } else {
        return 0;
      }
    }

    getTop() {
      if (this.size === 0) {
        return -1;
      } else {
        return this.top.val;
      }
    }
  }
  const inputArr = input.toString().trim().split("\n");
  inputArr.shift();
  const ans = [];

  const linkedStack = new LinkedStack();
  for (let i = 0; i < inputArr.length; i++) {
    switch (inputArr[i]) {
      case "pop":
        ans.push(linkedStack.pop());
        break;
      case "size":
        ans.push(linkedStack.getSize());
        break;
      case "empty":
        ans.push(linkedStack.empty());
        break;
      case "top":
        ans.push(linkedStack.getTop());
        break;
      default:
        const num = inputArr[i].split(" ").map(Number)[1];
        linkedStack.push(num);
    }
  }
  console.log(ans.join("\n"));
})();
