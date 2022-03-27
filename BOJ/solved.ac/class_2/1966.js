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

  class Queue {
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }

    peek() {
      return this.head.val;
    }

    enqueue(val) {
      const newNode = new Node(val);
      if (this.size === 0) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }

    dequeue() {
      const originalVal = this.head.val;
      this.head = this.head.next;
      this.size--;
      return originalVal;
    }
  }

  const [testNum, ...data] = input.toString().trim().split("\n");
  const ans = [];
  const testData = data.map((str, idx) => {
    if (idx === 0 || idx % 2 === 0) {
      return [data[idx], data[idx + 1]];
    }
  });

  for (let i = 0; i < testData.length; i += 2) {
    const findIdx = testData[i][0].split(" ").map(Number)[1];
    const numToEnqueue = testData[i][1].split(" ").map(Number);
    const printerQueue = new Queue();
    let cnt = 0;
    for (let j = 0; j < numToEnqueue.length; j++) {
      printerQueue.enqueue([numToEnqueue[j], j]);
    }
    const prioritiesArr = numToEnqueue.sort((a, b) => b - a);
    while (printerQueue.size > 0) {
      const peekVal = printerQueue.peek();
      if (peekVal[0] < prioritiesArr[cnt]) {
        printerQueue.enqueue(printerQueue.dequeue());
      } else {
        const originalVal = printerQueue.dequeue();
        cnt++;
        if (originalVal[1] === findIdx) {
          ans.push(cnt);
        }
      }
    }
  }

  console.log(ans.join("\n"));
})();
