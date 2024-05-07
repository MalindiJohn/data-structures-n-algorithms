/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    return Math.max(robHouses(nums.slice(0, nums.length - 1)), robHouses(nums.slice(1)));
    
};

// testing the function
console.log(rob([2,3,2])); // expected 3
console.log(rob([1,2,3,1])); // expected 4
console.log(rob([0])); // expected 0
console.log(rob([1])); // expected 1
console.log(rob([1,2])); // expected 2
console.log(rob([1,2,3])); // expected 3