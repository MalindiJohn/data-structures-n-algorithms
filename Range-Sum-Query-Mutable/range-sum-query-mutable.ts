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