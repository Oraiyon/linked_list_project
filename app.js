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
    return this.size;
  }

  getHead() {
    console.log(this.head);
  }

  getTail() {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    console.log(curr);
  }

  getIndex(value) {
    let curr = this.head;
    const array = [];
    while (curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        console.log(i);
        return;
      }
    }
  }

  containsItem(value) {
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

  findItem(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        console.log(curr);
        return;
      } else {
        curr = curr.next;
      }
    }
    console.log("Item Not Found");
  }

  print() {
    if (this.size === 0) {
      console.log("Empty");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
}

const list1 = new LinkedList();
list1.prepend(1);
list1.prepend(2);
list1.append(0);
list1.print();

//
// factory function
//

const newNode = (value) => {
  const next = null;
  return { value, next };
};

const newLinkedList = () => {
  let head = null;
  let size = 0;

  const append = (value) => {
    const node = newNode(value);
    if (size === 0) {
      head = node;
    } else {
      let curr = head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    size++;
  };

  const prepend = (value) => {
    const node = newNode(value);
    if (size !== 0) {
      node.next = head;
    }
    head = node;
    size++;
  };

  const getSize = () => {
    return size;
  };

  const getHead = () => {
    console.log(head);
  };

  const getTail = () => {
    let curr = head;
    while (curr.next) {
      curr = curr.next;
    }
    console.log(curr);
  };

  const getIndex = (value) => {
    let curr = head;
    const array = [];
    while (curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        console.log(i);
        return;
      }
    }
  };

  const containsItem = (value) => {
    let curr = head;
    while (curr) {
      if (curr.value === value) {
        console.log("True");
        return;
      } else {
        curr = curr.next;
      }
    }
    console.log("False");
  };

  const findItem = (value) => {
    let curr = head;
    while (curr) {
      if (curr.value === value) {
        console.log(curr);
        return;
      } else {
        curr = curr.next;
      }
    }
    console.log("Item Not Found");
  };

  const print = () => {
    if (size === 0) {
      console.log("Empty");
    }
    let curr = head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  };

  return {
    head,
    size,
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    getIndex,
    containsItem,
    findItem,
    print,
  };
};

const list2 = newLinkedList();
// list2.prepend(10);
// list2.prepend(20);
// list2.append(0);
// list2.print();
