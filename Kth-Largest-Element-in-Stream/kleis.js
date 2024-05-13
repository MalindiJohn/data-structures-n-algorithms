/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {

    this.k = k;
    this.heap = new MinHeap();
    for (let num of nums) {
        this.add(num);
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

    this.heap.insert(val);
    if (this.heap.size() > this.k) {
        this.heap.extractMin();
    }
    return this.heap.peek();
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    peek() {
        return this.heap[0];
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown(index) {
        while (true) {
            let minIndex = index;
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[minIndex]) {
                minIndex = leftIndex;
            }
            if (rightIndex < this.size() && this.heap[rightIndex] < this.heap[minIndex]) {
                minIndex = rightIndex;
            }
            if (minIndex !== index) {
                [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
                index = minIndex;
            } else {
                break;
            }
        }
    }
}

console.log(KthLargest(3, [4,5,8,2])); // 4
console.log(KthLargest(3, [4,5,8,2])); // 5
console.log(KthLargest(3, [4,5,8,2])); // 5
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8
console.log(KthLargest(3, [4,5,8,2])); // 8