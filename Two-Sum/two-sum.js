/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];

    
};

// Testing the function
console.log(twoSum([2, 7, 11, 15], 9)); // Output [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 3], 6)); // Output [0, 1]
console.log(twoSum([0, 4, 3, 0], 0)); // Output [0, 3]
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // Output [2, 4]
console.log(twoSum([-3, 4, 3, 90], 0)); // Output [0, 2]
console.log(twoSum([3, 2, 3], 6)); // Output [0, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]
console.log(twoSum([3, 2, 4], 6)); // Output [1, 2]