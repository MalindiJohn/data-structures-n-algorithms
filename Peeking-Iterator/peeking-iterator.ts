/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {

    private iterator: Iterator;
    private nextItem: number | null;

    constructor(iterator: Iterator) {

        this.iterator = iterator;
        this.nextItem = this.iterator.hasNext() ? this.iterator.next() : null;

    }

    peek(): number {

        return this.nextItem;

    }

    next(): number {

        let ret = this.nextItem;
        this.nextItem = this.iterator.hasNext() ? this.iterator.next() : null;
        return ret;

    }

    hasNext(): boolean {

        return this.nextItem !== null;

    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

// testing the function
let iterator = new PeekingIterator(new Iterator([1, 2, 3]));
console.log(iterator.peek()); // 1
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.next()); // 3
console.log(iterator.hasNext()); // false

