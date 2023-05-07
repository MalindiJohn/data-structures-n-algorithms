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

    }

    sumRange(left: number, right: number): number {

    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */