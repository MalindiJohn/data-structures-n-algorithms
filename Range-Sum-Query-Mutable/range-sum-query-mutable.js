/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    this.nums = nums;
    this.bit = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        this.init(i, nums[i]);
    }
    
};

NumArray.prototype.init = function(index, val) {
    index++; // BIT is 1-indexed
    while (index < this.bit.length) {
        this.bit[index] += val;
        index += index & (-index); // Move to the next index to update
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */