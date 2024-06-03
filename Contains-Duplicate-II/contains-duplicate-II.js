/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
    
};

// testing the function
let nums = [1, 2, 3, 1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1, 0, 1, 1];
k = 1;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1, 2, 3, 1, 2, 3];
k = 2;
console.log(containsNearbyDuplicate(nums, k)); // false

nums = [99, 99];
k = 2;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
k = 3;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
k = 2;
console.log(containsNearbyDuplicate(nums, k)); // false

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
k = 1;
console.log(containsNearbyDuplicate(nums, k)); // false

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
k = 0;
console.log(containsNearbyDuplicate(nums, k)); // false