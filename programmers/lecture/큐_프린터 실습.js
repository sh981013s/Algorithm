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
    const originalHeadVal = this.head.val;
    this.head = this.head.next;
    this.size--;
    return originalHeadVal;
  }
}

function solution(priorities, location) {
  const printerQueue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    printerQueue.enqueue([priorities[i], i]);
  }

  const printerPriorities = priorities.sort((a, b) => b - a);
  let cnt = 0;
  while (true) {
    const headVal = printerQueue.peek();
    if (headVal[0] < printerPriorities[cnt]) {
      const originalHeadVal = printerQueue.dequeue();
      printerQueue.enqueue(originalHeadVal);
    } else {
      const originalHeadVal = printerQueue.dequeue();
      cnt++;
      if (location === originalHeadVal[1]) {
        return cnt;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
