/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let i = mid;
            let j = mid;
            while (i >= 0 && nums[i] === target) {
                i--;
            }
            while (j < nums.length && nums[j] === target) {
                j++;
            }
            result[0] = i + 1;
            result[1] = j - 1;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;

};

// Testing the function
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output [-1, -1]
console.log(searchRange([], 0)); // Output [-1, -1]
console.log(searchRange([0], 0)); // Output [0, 0]
console.log(searchRange([0], 1)); // Output [-1, -1]
console.log(searchRange([1], 0)); // Output [-1, -1]
console.log(searchRange([1], 1)); // Output [0, 0]
console.log(searchRange([1, 1], 0)); // Output [-1, -1]
console.log(searchRange([1, 1], 1)); // Output [0, 1]
console.log(searchRange([1, 1, 1], 0)); // Output [-1, -1]
console.log(searchRange([1, 1, 1], 1)); // Output [0, 2]
console.log(searchRange([1, 1, 1, 1], 0)); // Output [-1, -1]
console.log(searchRange([1, 1, 1, 1], 1)); // Output [0, 3]
console.log(searchRange([1, 1, 1, 1, 1], 0)); // Output [-1, -1]
console.log(searchRange([1, 1, 1, 1, 1], 1)); // Output [0, 4]
console.log(searchRange([1, 1, 1, 1, 1, 1], 0)); // Output [-1, -1]
console.log(searchRange([1, 1, 1, 1, 1, 1], 1)); // Output [0, 5]
console.log(searchRange([1, 1, 1, 1, 1, 1, 1], 0)); // Output [-1, -1]