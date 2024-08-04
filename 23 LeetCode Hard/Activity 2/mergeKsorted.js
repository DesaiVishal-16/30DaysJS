// Activity 2: Merge k Sorted Lists

// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.

// Write a function that takes an array of k linked lists,each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) return null;

  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
  }

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
}

function createLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Create a few test cases with linked lists and log the merged list.
const testCases = [
  [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ],
  [],
  [[]],
];

for (const testCase of testCases) {
  const lists = testCase.map(createLinkedList);
  const mergedList = mergeKLists(lists);
  console.log(`Input: ${JSON.stringify(testCase)}`);
  console.log(`Output: ${JSON.stringify(linkedListToArray(mergedList))}`);
  console.log("---");
}
