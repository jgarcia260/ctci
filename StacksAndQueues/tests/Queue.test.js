const Queue = require('../Queue.js');

let newQueue;
beforeAll(() => {
    newQueue = new Queue();
})

describe('Stack', () => {
    test('will add and remove one value', () => {
        newQueue.add(1);
        expect(newQueue.remove()).toBe(1);
        console.log(newQueue)
        expect(newQueue.isEmpty()).toBe(true);
    })

    test('will add 5 values', () => {
        newQueue.add(1);
        newQueue.add(2);
        newQueue.add(3);
        newQueue.add(4);
        newQueue.add(5);
        expect(newQueue.size).toBe(5);
    })

    test('will remove and check the new first in line', () => {
        expect(newQueue.peek()).toBe(1);
        expect(newQueue.remove()).toBe(1);
        expect(newQueue.peek()).toBe(2);
    })


})