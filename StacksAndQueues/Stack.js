//implement a stack. LIFO
const Stack = function () {
    this.storage = [];
};
//removese top most value
Stack.prototype.pop = function () {
    return this.storage.pop();
}
//adds value to the top
Stack.prototype.push = function (value) {
    this.storage.push(value);
}
//returns the top of the stack
Stack.prototype.peek = function () {
    if (!this.storage.length) return null;
    return this.storage[this.storage.length - 1];
}
//returns if empty
Stack.prototype.isEmpty = function () {
    return this.storage.length === 0;
}

module.exports = Stack;