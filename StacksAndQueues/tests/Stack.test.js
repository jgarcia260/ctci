const Stack = require('../Stack.js');

let newStack;
beforeAll(() => {
    newStack = new Stack;
})

describe('The stack', () => {
    test('will check if the stack is empty', () => {
        expect(newStack.isEmpty()).toBe(true);
    })

    test('will add 5 values to the stack', () => {
        newStack.push(5)
        newStack.push(4)
        newStack.push(3)
        newStack.push(2)
        newStack.push(1)
        let size = newStack.storage.length;
        expect(size).toBe(5);
    })

    test('will remove the top most value of the stack and check the new top most value', () => {
        expect(newStack.pop()).toBe(1);
        expect(newStack.peek()).toBe(2);
    })
})
