//implement a queue. LIFO
const Queue = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

Queue.prototype.add = function (value) {
    let newNode = { val: value, next: null };
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }
    this.size++;
}

Queue.prototype.remove = function () {
    if (!this.head) return null;
    let val = this.head.val;
    this.head = this.head.next;
    this.tail = !this.head ? null : this.tail;
    this.size--;
    return val;
}
//return the head value if any
Queue.prototype.peek = function () {
    if (!this.head) return null;
    return this.head.val;
}

Queue.prototype.isEmpty = function () {
    return this.size === 0;
}

module.exports = Queue;