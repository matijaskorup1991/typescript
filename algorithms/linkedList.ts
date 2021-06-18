class Node {
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value: number) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  unshift(value) {}
  insert(index, value) {}
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(7);
console.log(myLinkedList);
