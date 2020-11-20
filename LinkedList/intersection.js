/**
 * Give two singly linked lists, determine if the two lists intersect. Return the intersecting node
 * NOte that the intersection is defined based on reference, not va;ue. That is if the kth node of the first linked list is the exact same node as the
 * jth node of the second linked list, then they are intersecting.
 *
 *
 */

function intersectingLinkedList(linkedlist1, linkedlist2) {
    //current node for linkedlist1
    //current node for linkedlist2
    //loop through the linked list until both are null
    //compare both linked lists, return true
    //move linked list 1 over once
    //move linked list 2 over twice
    let currentOne = linkedlist1;
    let currentTwo = linkedlist2;
    while (currentOne || currentTwo) {
        if (currentOne === currentTwo) return true;
        currentOne = currentOne ? currentOne.next : linkedlist1;
        currentTwo = currentTwo ? currentTwo.next : linkedlist2;
        currentTwo = currentTwo ? currentTwo.next : linkedlist2;
    }
    return false;
};

let sample1 = { val: 'a', next: { val: 'a', next: { val: 'b', next: null } } };
let sample2 = { val: 'b', next: { val: 'a', next: { val: 'b', next: null } } };
let sample = intersectingLinkedList(sample1, sample2);
console.log(sample);
