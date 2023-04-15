/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    this.nums = nums;
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {

    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        sum += this.nums[i];
    }
    
    return sum;
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// testing the function
let nums = [-2, 0, 3, -5, 2, -1];
let obj = new NumArray(nums);
console.log(obj.sumRange(0, 2)); // 1
console.log(obj.sumRange(2, 5)); // -1
console.log(obj.sumRange(0, 5)); // -3
console.log(obj.sumRange(0, 0)); // -2
console.log(obj.sumRange(2, 2)); // 3
console.log(obj.sumRange(5, 5)); // -1
console.log(obj.sumRange(0, 5)); // -3
console.log(obj.sumRange(0, 0)); // -2
console.log(obj.sumRange(2, 2)); // 3
console.log(obj.sumRange(5, 5)); // -1
console.log(obj.sumRange(0, 5)); // -3
console.log(obj.sumRange(0, 0)); // -2
console.log(obj.sumRange(2, 2)); // 3
console.log(obj.sumRange(5, 5)); // -1
console.log(obj.sumRange(0, 5)); // -3