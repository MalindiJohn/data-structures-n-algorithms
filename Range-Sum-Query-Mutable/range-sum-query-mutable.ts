class NumArray {

    // define properties
    private segmentTree: number[];
    private n: number;

    constructor(nums: number[]) {

        this.n = nums.length;
        // The size of the segment tree array can be up to 4*n for an array of size n.
        this.segmentTree = new Array(4 * this.n);
        this.buildTree(nums, 0, this.n - 1, 0);

    }

    private buildTree(nums: number[], start: number, end: number, index: number): void {
        if (start === end) {
            this.segmentTree[index] = nums[start];
            return;
        }
        let mid = Math.floor((start + end) / 2);
        // Recursively build the left and right children.
        this.buildTree(nums, start, mid, 2 * index + 1);
        this.buildTree(nums, mid + 1, end, 2 * index + 2);
        // The current node's value is the sum of its children.
        this.segmentTree[index] = this.segmentTree[2 * index + 1] + this.segmentTree[2 * index + 2];
    }

    update(index: number, val: number): void {

        this.updateTree(0, this.n - 1, index, val, 0);

    }

    private updateTree(start: number, end: number, idx: number, val: number, index: number): void {
        if (start === end) {
            this.segmentTree[index] = val;
            return;
        }
        let mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            // If the index to be updated is in the left child, update the left child.
            this.updateTree(start, mid, idx, val, 2 * index + 1);
        } else {
            // Otherwise, update the right child.
            this.updateTree(mid + 1, end, idx, val, 2 * index + 2);
        }
        // After updating the child, update the current node's value.
        this.segmentTree[index] = this.segmentTree[2 * index + 1] + this.segmentTree[2 * index + 2];
    }

    sumRange(left: number, right: number): number {

        return this.queryRange(0, this.n - 1, left, right, 0);

    }

    private queryRange(start: number, end: number, left: number, right: number, index: number): number {
        if (left > end || right < start) {
            // If the range represented by a node is completely outside the given range.
            return 0;
        }
        if (left <= start && end <= right) {
            // If the range represented by a node is completely inside the given range.
            return this.segmentTree[index];
        }
        // If the range represented by a node is partially inside and partially outside the given range.
        let mid = Math.floor((start + end) / 2);
        return this.queryRange(start, mid, left, right, 2 * index + 1) +
            this.queryRange(mid + 1, end, left, right, 2 * index + 2);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

// testing the function
let numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // returns 9
numArray.update(1, 2);
console.log(numArray.sumRange(0, 2)); // returns 8