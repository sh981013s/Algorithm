class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  console.log(queue);
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
    console.log(queue);
  }

  priorities.sort((a, b) => b - a);

  let cnt = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[cnt]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      cnt++;
      if (location === value[1]) {
        return cnt;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
