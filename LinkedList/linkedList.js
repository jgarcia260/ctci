function Node(val = null, next = null) {
  this.val = val;
  this.next = next;
};

function randomLinkedListGenerator(max, range = 50) {
  let newLinkedList = new Node('hello');
  let tail = newLinkedList;
  let numbers = [];
  for (let i = 0; i < max; i++) {
    let num = Math.floor(Math.random() * range);
    numbers.push(num);
    let newNode = new Node(num);
    tail.next = newNode;
    tail = tail.next;
  }
  return [newLinkedList.next, numbers];
}

module.exports = { randomLinkedListGenerator, Node };
