const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = null;
    this.tail = null;
    this.head = null;
  }

  get size() {
    let s = 0;
    while (this.next !== null) {
      this.next++;
      s++;
    }
    return s;
  }

  enqueue(element) {
    const nextElement = new ListNode(element);
    if (this.queue === null) {
      this.queue = nextElement;
      this.head = nextElement;
      this.tail = nextElement;
    } else {
      this.tail.next = nextElement;
      this.tail = nextElement;
    }
  }

  dequeue() {
    const result = this.head;
    this.head = this.head.next;
    return result.value;
  }
}

module.exports = Queue;
