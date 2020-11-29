//create a min heap using an array
/**
 * formula to find parent index
 * parentIndex = Math.floor((childIndex - 1) / 2)
 *
 * formula to find children
 * parentIndex * 2 + 1, parentIndex * 2 + 2
 *
 * heap only cares for the first value
 */


//instantiate the heap
//add to the heap => return the smallest value
//push the array
//as long as the newly added value is not the parent and the child index is less than the parent
//swap them both
//update parent and current index
//return the top of the min heap

//compare(i, j)
//returns if the value is less than j

//swap(i, j)
//create a placeholder for i value
//i = j value
//j = placeholder

//remove from the heap => return the new smallest
//swap the zero index with the last value
//pop to remove value
//currentIndex = 0
//smallestchildIndex =
//if the currentIndex is greater than smallestChild
//swap
//return value which was popped

function Heap() {
    this.storage = [];
}

Heap.prototype.add = function (value) {
    this.storage.push(value);
    let currentIndex = this.storage.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex > 0 && this.isSmaller(currentIndex, parentIndex)) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
    console.log('smallest value', this.storage[0]);
}

Heap.prototype.remove = function () {
    this.swap(0, this.storage.length - 1);
    let deletedValue = this.storage.pop();
    let currentIndex = 0;
    let smallestChildIndex = this.findSmallestChildIndex(currentIndex);
    while (smallestChildIndex < this.storage.length && this.isSmaller(smallestChildIndex, currentIndex)) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
        smallestChildIndex = this.findSmallestChildIndex(currentIndex);
    }

    return deletedValue
}

Heap.prototype.isSmaller = function (i, j) {
    // console.log(i, j, this.storage[i], this.storage[j], this.storage[i] < this.storage[j])
    return this.storage[i] < this.storage[j];
}

Heap.prototype.swap = function (i, j) {
    let placeholder = this.storage[i];
    this.storage[i] = this.storage[j];
    this.storage[j] = placeholder;
}

Heap.prototype.findSmallestChildIndex = function (parentIndex) {
    let firstChildIndex = parentIndex * 2 + 1;
    let secondChildIndex = parentIndex * 2 + 2;
    let smallestChildIndex;
    if (this.storage[firstChildIndex] === undefined && this.storage[secondChildIndex] === undefined) {
        smallestChildIndex = Infinity;
    } else if (this.storage[secondChildIndex] === undefined) {
        smallestChildIndex = firstChildIndex;
    } else {
        smallestChildIndex = this.isSmaller(firstChildIndex, secondChildIndex) ? firstChildIndex : secondChildIndex
    }
    return smallestChildIndex
}

let newHeap = new Heap();
newHeap.add(30)
newHeap.add(20)
newHeap.add(10)
newHeap.add(5)
newHeap.add(3)
newHeap.add(2)
// console.log(newHeap.findSmallestChildIndex(2))
console.log(newHeap);
newHeap.remove();
newHeap.remove();
newHeap.remove();
console.log(newHeap);
