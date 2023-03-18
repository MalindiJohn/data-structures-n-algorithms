/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    slow = nums[0];
    
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
    
};

// testing the function
let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums)); // 2

nums = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums)); // 3