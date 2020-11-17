/**
 * implement an algorithm to delete a node in the middle (i.e any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node
 * EXAMPLE
 *
 * 1 2 3 4
 * ^     ^
 * 1 2 3 4 5
 *   ^       ^
 *
 * 1
 * ^ ^
 * O new linked list with the middle node revoved
 * I linked list
 * C time complexity
 * E if its null return null,
 *
 * if the second pointer becomes null, delete the first pointer
 */

const { randomLinkedListGenerator, Node } = require('./linkedList.js');


function deleteMiddleNode(linkedList) {
  if (!linkedList) return linkedList;

  //create slowPointer
  //create fastPointer
  //loop until fastPointer is null
  //move the fast pointer 2 nodes over
  //check if its null
  //if so delete the current node
  //else move the slow pointer 1 node over

  //return linkedList
  let referenceLinkedList = new Node(null);
  referenceLinkedList.next = linkedList;
  let slowPointer = referenceLinkedList;
  let fastPointer = referenceLinkedList.next;
  if (!fastPointer) return null;
  while (fastPointer) {
    fastPointer = fastPointer.next ? fastPointer.next.next : fastPointer.next;

    if (!fastPointer) {
      slowPointer.next = slowPointer.next.next;
    } else {
      slowPointer = slowPointer.next;
    }

  }
  return referenceLinkedList.next;
};

let linkedList = randomLinkedListGenerator(4);
console.log('linked list order', linkedList[1]);
let test1 = deleteMiddleNode(linkedList[0]);
console.log(test1);