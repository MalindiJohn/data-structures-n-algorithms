class NumArray {

    private sums: number[];

    constructor(nums: number[]) {

        this.sums = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.sums[i + 1] = this.sums[i] + nums[i];
        }

    }

    sumRange(left: number, right: number): number {

    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */