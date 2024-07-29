# Day 17: Data Structures

## Tasks/Activities:

### Activity 1: Linked List

#### Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.next = secondNode;

console.log(firstNode);
console.log(secondNode);
```

#### Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes

```js
class LinkedList {
  constructor() {
    this.head = null;
  }

  addToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeFromEnd() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  }

  display() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);

console.log("List after adding nodes:");
list.display();

list.removeFromEnd();
console.log("List after removing node from end:");
list.display();
```

// Activity 2: Stack

#### Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log(this.items.join(", "));
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushing elements:");
stack.display();

console.log("Top element is:", stack.peek());

stack.pop();
console.log("Stack after popping an element:");
stack.display();
```

#### Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then pooping them off.

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log(this.items.join(", "));
  }
}

function reverseString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

const inputString = "Hello, World!";
const reversedString = reverseString(inputString);
console.log("Original String:", inputString);
console.log("Reversed String:", reversedString);
```

### Activity 3: Queue

#### Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    console.log(this.items.join(", "));
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.front());
console.log("Queue before dequeue:");
queue.display();

console.log("Dequeued element:", queue.dequeue());
console.log("Queue after dequeue:");
queue.display();
console.log("Front element after dequeue:", queue.front());
```

#### Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    console.log(this.items.join(", "));
  }
}

function printerQueueSimulation() {
  const printerQueue = new Queue();

  printerQueue.enqueue("Print job 1");
  printerQueue.enqueue("Print job 2");
  printerQueue.enqueue("Print job 3");

  console.log("Current printer queue:");
  printerQueue.display();

  while (!printerQueue.isEmpty()) {
    const currentJob = printerQueue.dequeue();
    console.log(`Processing ${currentJob}`);
  }

  console.log("Printer queue after processing all jobs:");
  printerQueue.display();
}

printerQueueSimulation();
```

### Activity 4: Binary Tree

#### Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value,left, and right.

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(root);
```

#### Task 8: Implement a BinaryTree class with methods for inserting values ans performing in-order traversal to display nodes.

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal of the binary tree:");
binaryTree.inOrderTraversal();
```

### Activity 5: Graph

#### Task 9: Implement a Graph class with methods to add vertices, and edges, and perform a breadth first search (BFS).

```js
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  bfs(startVertex) {
    if (!this.adjacencyList.has(startVertex)) {
      console.log(`Vertex ${startVertex} does not exist.`);
      return;
    }

    const visited = new Set();
    const queue = [startVertex];

    while (queue.length > 0) {
      const currentVertex = queue.shift();

      if (!visited.has(currentVertex)) {
        console.log(currentVertex);
        visited.add(currentVertex);

        const neighbors = this.adjacencyList.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("BFS starting from vertex A:");
graph.bfs("A");
```

#### Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

```js
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  }

  bfsShortestPath(startVertex, endVertex) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      console.log(`One or both vertices do not exist.`);
      return null;
    }

    const visited = new Set();
    const queue = [[startVertex]];

    while (queue.length > 0) {
      const path = queue.shift();
      const currentVertex = path[path.length - 1];

      if (currentVertex === endVertex) {
        return path;
      }

      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);

        const neighbors = this.adjacencyList.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            const newPath = [...path, neighbor];
            queue.push(newPath);
          }
        }
      }
    }

    return null;
  }
}

const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");

const startNode = "A";
const endNode = "E";

console.log(`Shortest path between ${startNode} and ${endNode}:`);
const shortestPath = graph1.bfsShortestPath(startNode, endNode);
if (shortestPath) {
  console.log(shortestPath.join(" -> "));
} else {
  console.log("No path found.");
}
```
