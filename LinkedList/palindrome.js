/**
 * Implement a function to check if a linked list is a palindrome
 *
 *
 * Approach1
 * create a string out of the linked list and compare it to its reverse
 *
 * Apprach2
 *
 * currentNode => null
 * node1 node2 node3
 *
 * save node2 node3
 * node1.next = currentNode
 */

function isPalindrome(linkedlist) {
    if (!linkedlist) return linkedlist;

    let lastNode = null;
    let currentNode = linkedlist;

    while (currentNode) {
        let placeholder = currentNode.next;
        currentNode.next = lastNode;

        lastNode = currentNode;
        currentNode = placeholder;

    }

    while (lastNode && linkedlist) {
        if (lastNode.val !== linkedlist.val) return false;
        lastNode = lastNode.next;
        linkedlist = linkedlist.next;
    }
    console.log('come in here')
    if ((!lastNode && linkedlist) || (lastNode && !linkedlist)) return false;

    return true;
};

let test1 = { val: 'b', next: { val: 'a', next: { val: 'b', next: null } } };
let sample = isPalindrome(test1);
console.log(sample);
