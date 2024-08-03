// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.

// Write a function that takes two non-empty linked lists representing two  non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function createLinkedList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Create a few test cases with linked lists and log the sum as a linked list.

const testCases = [
  [
    [2, 4, 3],
    [5, 6, 4],
  ],
  [[0], [0]],
  [
    [9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9],
  ],
];

for (let [arr1, arr2] of testCases) {
  const l1 = createLinkedList(arr1);
  const l2 = createLinkedList(arr2);
  const result = addTwoNumbers(l1, l2);
  console.log(`${arr1} + ${arr2} = ${linkedListToArray(result)}`);
}
