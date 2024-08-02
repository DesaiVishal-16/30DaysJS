// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.

// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

// Create a few test cases with linked lists and log the merged list.
function runTestCases() {
  let l1 = createLinkedList([1, 2, 4]);
  let l2 = createLinkedList([1, 3, 4]);
  let merged = mergeTwoLists(l1, l2);
  console.log("Test case 1:", linkedListToArray(merged));

  // Test case 2: One empty list
  l1 = createLinkedList([]);
  l2 = createLinkedList([0]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 2:", linkedListToArray(merged));

  // Test case 3: Both empty lists
  l1 = createLinkedList([]);
  l2 = createLinkedList([]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 3:", linkedListToArray(merged));

  // Test case 4: Lists of different lengths
  l1 = createLinkedList([1, 3, 5, 7, 9]);
  l2 = createLinkedList([2, 4, 6]);
  merged = mergeTwoLists(l1, l2);
  console.log("Test case 4:", linkedListToArray(merged));
}

runTestCases();
