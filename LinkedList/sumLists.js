/**
 * You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as linked list. You are not allowed to cheat just conver the list list to an integer
 * O
 * integer. addition of both linked list values.
 * I
 * two linked list.
 * C
 * space complexity
 * E
 * if one number is
 */

const { randomLinkedListGenerator, Node } = require('./linkedList.js');

// let sumList = (l1, l2) => {
//     return addNumbers(l1) + addNumbers(l2);
// };

// function addNumbers(linkedList) {
//     //create a total variable
//     let total = 0;
//     //create place value variable
//     let placeValue = 1;
//     //iterate through the linked list
//     while (linkedList) {
//         let product = placeValue * linkedList.val;
//         total += product;
//         placeValue *= 10;
//         linkedList = linkedList.next;
//     }
//     return total
// }

// let linkedList1 = randomLinkedListGenerator(3, 9);
// let linkedList2 = randomLinkedListGenerator(10, 9);
// console.log(linkedList1[1], 'linked list 1');
// console.log(linkedList2[1], 'linked list 2');
// // console.log(addNumbers(linkedList1[0]));
// let test1 = sumList(linkedList1[0], linkedList2[0])
// console.log('sum of both linked lists', test1)

let sumList = (l1, l2) => {
    //new linked list
    let newLinkedList = new Node(null);
    //tail
    let tail = newLinkedList;
    //keep a remainder variable
    let remainder = 0;
    //iterate through linked lists as long as both l1 and l2 are not null
    while (l1 || l2) {
        //add both values and remainder
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let sum = l1Value + l2Value + remainder;
        remainder = 0;
        //if added values are greater than 9
        if (sum > 9) {
            //deduct 10 from the added values, add to increment
            remainder += 1;
            sum -= 10;
        }
        //create a new node with total sum
        let node = new Node(sum);
        //tail equals new node
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        tail.next = node;
        tail = tail.next;
        //update tail to be the next value
    }

    if (remainder > 0) {
        let node = new Node(remainder);
        tail.next = node;
    }
    return newLinkedList.next;
}

let linkedList1 = randomLinkedListGenerator(4, 9);
let linkedList2 = randomLinkedListGenerator(1, 9);
console.log(linkedList1[1], 'linked list 1');
console.log(linkedList2[1], 'linked list 2');
// console.log(addNumbers(linkedList1[0]));
let test1 = sumList(linkedList1[0], linkedList2[0])
console.log('sum of both linked lists', test1)