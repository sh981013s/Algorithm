class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  push_front(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  push_back(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop_front() {
    if (this.size === 0) {
      return -1;
    } else {
      const headVal = this.head.val;
      this.head = this.head.next;
      this.size--;
      return headVal;
    }
  }

  pop_back() {
    if (this.size === 0) {
      return -1;
    } else {
      const tailVal = this.tail.val;
      this.tail = this.tail.prev;
      this.size--;
      return tailVal;
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
