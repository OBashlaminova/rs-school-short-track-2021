class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top++;
  }

  pop() {
    this.top--;
    return this.data.pop();
  }

  peek() {
    return this.data[this.top - 1];
  }
}

module.exports = Stack;
