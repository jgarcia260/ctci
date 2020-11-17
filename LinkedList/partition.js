
/**
 * Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
 *
 * O
 * two linked list. one with values less than x and the greater than equal to
 * I
 * linkedlist and x.
 * C
 * time and space complexity
 * E
 * one value? continue with the algo
 *
 * First approach
 * create two new linked list, lessThanX, greaterThanX
 * loop throught the origninal linked list
 * add to the less than if the value is less than x
 * add to greater than if value is greater than or equal to x
 * connect less to greater than
 * update tail of greater tahn to be null
 * return the nnew linked list
 *
 *
 */
const { randomLinkedListGenerator, Node } = require('./linkedList.js');


function partitionLinkedList(linkedlist, x) {
    if (!linkedlist) return linkedlist;
    let smallerThanX = new Node(null);
    let currentSmallNode = smallerThanX;
    let largerThanX = new Node(null);
    let currentLargeNode = largerThanX;
    while (linkedlist) {
        if (linkedlist.val < x) {
            currentSmallNode.next = linkedlist;
            currentSmallNode = currentSmallNode.next;
        } else {
            currentLargeNode.next = linkedlist;
            currentLargeNode = currentLargeNode.next;
        }
        linkedlist = linkedlist.next;
    }
    currentSmallNode.next = largerThanX.next;
    currentLargeNode.next = null;
    return smallerThanX.next;
};

let ll = randomLinkedListGenerator(3, 3);
console.log(ll[1], 'values');
let sample = partitionLinkedList(ll[0], 3);
console.log(sample);