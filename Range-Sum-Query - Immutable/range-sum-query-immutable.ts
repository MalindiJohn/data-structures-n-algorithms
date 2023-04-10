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
console.log(numArray.sumRange(0, 5)); // -3
console.log(numArray.sumRange(0, 0)); // -2
console.log(numArray.sumRange(0, 1)); // -2
console.log(numArray.sumRange(1, 1)); // 0
console.log(numArray.sumRange(1, 2)); // 3
console.log(numArray.sumRange(2, 2)); // 3
console.log(numArray.sumRange(2, 3)); // -2
console.log(numArray.sumRange(3, 3)); // -5
console.log(numArray.sumRange(3, 4)); // -3
console.log(numArray.sumRange(4, 4)); // 2
console.log(numArray.sumRange(4, 5)); // 1
console.log(numArray.sumRange(5, 5)); // -1
console.log(numArray.sumRange(0, 5)); // -3
console.log(numArray.sumRange(0, 0)); // -2
console.log(numArray.sumRange(1, 1)); // 0