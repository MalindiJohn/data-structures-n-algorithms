/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    
    this.iterator = iterator;
    this.nextItem = this.iterator.hasNext() ? this.iterator.next() : null;

};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    
    return this.nextItem;

};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {

    let ret = this.nextItem;
    this.nextItem = this.iterator.hasNext() ? this.iterator.next() : null;
    return ret;
    
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {

    return this.nextItem !== null;
    
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */


// testing the function
let arr = [1, 2, 3];
let obj = new PeekingIterator(arr);
console.log(obj.peek()); // 1
console.log(obj.next()); // 1
console.log(obj.peek()); // 2
console.log(obj.next()); // 2
console.log(obj.next()); // 3
console.log(obj.hasNext()); // false
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null
console.log(obj.hasNext()); // false
console.log(obj.peek()); // null
console.log(obj.next()); // null