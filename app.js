// class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size !== 0) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  getSize() {
    console.log(`List Size ${this.size}`);
  }

  getHead() {
    const curr = this.head;
    for (let i = 0; i <= 0; i++) {
      console.log(curr);
    }
  }

  getTail() {
    let curr = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      curr = curr.next;
    }
    console.log(curr);
  }

  atIndex(index) {
    if (index <= this.size - 1) {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      console.log(curr);
    } else {
      console.log("Invalid Index");
    }
  }

  pop() {
    let curr = this.head;
    for (let i = 0; i < this.size - 2; i++) {
      curr = curr.next;
    }
    console.log(`Removed ${curr.next.value}`);
    curr.next = null;
    this.size--;
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        console.log("True");
        return;
      }
      curr = curr.next;
    }
    console.log("False");
  }

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        console.log(curr);
        return;
      }
      curr = curr.next;
    }
    console.log("Item Not Found");
  }

  print() {
    if (this.size === 0) {
      console.log("Empty List");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
    } else if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    let removedNode = this.head;
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removedNode = curr.next;
      curr.next = removedNode.next;
    }
    this.size--;
    console.log(`Removed ${removedNode.value} From Index ${index}`);
  }
}

const list1 = new LinkedList();
list1.prepend(10);
list1.prepend(20);
list1.append(0);
list1.insertAt(30, 1);
list1.print();
