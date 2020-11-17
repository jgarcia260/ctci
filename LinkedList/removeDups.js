/**
 * Remove Dups
 * Remove duplicates from an unsorted linked list
 *
 * Follow up
 * without a temporary buffer
 *
 * First Approach
 *store them inside an object
 if they do not exist add to the new linked list
 */

const { randomLinkedListGenerator, Node } = require('./linkedList.js');

//create storage
//create a new linked list head
//track the tail
//loop through the LL
//check if the current value is inside of the storage
//if not add to storage, add linkedlist to the tail
//update LL to next value
//return linkedlist
function removeDups(linkedList) {
  let storage = {};
  let newLinkedList = new Node('hi');
  let tail = newLinkedList;
  while (linkedList) {
    if (!storage[linkedList.val]) {
      storage[linkedList.val] = 1;
      tail.next = linkedList;
      tail = tail.next;
    }
    linkedList = linkedList.next;
  }
  tail.next = null;

  return newLinkedList.next;
}

const test1 = randomLinkedListGenerator(10, 2);
console.log(test1[1], 'array of values');
console.log(removeDups(test1[0]), 'removed duplicates')
