/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
    
};

// testing the function
console.log(search([2,5,6,0,0,1,2], 0)); // true
console.log(search([2,5,6,0,0,1,2], 3)); // false
console.log(search([1,0,1,1,1], 0)); // true
console.log(search([1,1,1,0,1], 0)); // true
console.log(search([1,1,1,1,1], 0)); // false
console.log(search([1,1,1,1,1], 1)); // true
console.log(search([1,1,1,1,1], 2)); // false
console.log(search([1,1,1,1,1], 3)); // false
console.log(search([1,1,1,1,1], 4)); // false
console.log(search([1,1,1,1,1], 5)); // false
console.log(search([1,1,1,1,1], 6)); // false
console.log(search([1,1,1,1,1], 7)); // false
console.log(search([1,1,1,1,1], 8)); // false
console.log(search([1,1,1,1,1], 9)); // false
console.log(search([1,1,1,1,1], 10)); // false
console.log(search([1,1,1,1,1], 11)); // false
console.log(search([1,1,1,1,1], 12)); // false
console.log(search([1,1,1,1,1], 13)); // false
console.log(search([1,1,1,1,1], 14)); // false