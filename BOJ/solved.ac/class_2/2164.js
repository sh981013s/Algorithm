"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");

  class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    removeHead() {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }

    getHeadVal() {
      return this.head.val;
    }

    addToTail(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
      this.size++;
    }

    getSize() {
      return this.size;
    }
  }

  const cards = new LinkedList();
  for (let i = 1; i <= +input.toString().trim(); i++) {
    cards.addToTail(i);
  }
  while (cards.getSize() !== 1) {
    cards.removeHead();
    cards.addToTail(cards.getHeadVal());
    cards.removeHead();
  }
  console.log(cards.getHeadVal());
})();
