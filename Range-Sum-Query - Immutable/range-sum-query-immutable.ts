class NumArray {

    private sums: number[];

    constructor(nums: number[]) {

        this.sums = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.sums[i + 1] = this.sums[i] + nums[i];
        }

    }

    sumRange(left: number, right: number): number {

        return this.sums[right + 1] - this.sums[left];

    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// testing the function
let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // 1
console.log(numArray.sumRange(2, 5)); // -1