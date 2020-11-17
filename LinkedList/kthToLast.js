const { randomLinkedListGenerator, Node } = require('./linkedList.js');

/**
 * Implement an alogorithm to find the kth to last element of a singly linked list
 * O node, length of linked list - k
 * I - linked list and integer
 * C - time complexity
 * E -
 * if k is zero return last
 * if k is greater than the length return the linked list
 *
 * first approach
 * count the length by iterating
 * return the length - k node
 *
 * second approach
 */

// function kthToLast(linkedList, k) {
//if the linked list is null, return linkedList
//create a reference to the linked list to iterate through
//keep a size variable
//iterate through reference and increment counter to get size of linked list

//create target variable by doing size - k
//if target is a negative number return linkedlist. if its zero return linked list
//create counter
//iterate throughg actual linkedList
//increment counter
//if counter === target,
//return linkedList
//   if (!linkedList) return linkedList;
//   let reference = linkedList;
//   let size = 0;
//   while (reference) {
//     size++;
//     reference = reference.next;
//   }
//   // console.log(size, 'size');

//   let target = size - k;
//   if (target <= 0) {
//     return linkedList;
//   }
//   let counter = 0;
//   while (linkedList) {
//     counter++;
//     if (counter - 1 === target) return linkedList;
//     linkedList = linkedList.next;
//   }
// };

// let linkedList = randomLinkedListGenerator(5);
// let arr = linkedList[1];
// console.log(arr);
// let sample = kthToLast(linkedList[0], 1);
// console.log(sample)

//iterative approach
function kthToLast(linkedList, k) {

  function helperFunction(node) {
    if (!node) return 0;

    let counter = helperFunction(node.next);
    console.log(counter, 'counter');
    if (counter === typeof 'number') {
      if (counter + 1 === k) {
        return node;
      } else {
        return counter + 1;
      }
    } else {
      return node;
    }
  }

  return helperFunction(linkedList);
}

let linkedList = randomLinkedListGenerator(5);
let arr = linkedList[1];
console.log(arr);
let sample = kthToLast(linkedList[0], 2);
console.log(sample, 'ANSWER');