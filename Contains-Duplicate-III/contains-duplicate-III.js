/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let bucket = Math.floor(nums[i] / (valueDiff + 1));
        if (map.has(bucket) ||
            (map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= valueDiff) ||
            (map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) <= valueDiff)) {
            return true;
        }
        map.set(bucket, nums[i]);
        if (i >= indexDiff) {
            map.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)));
        }
    }
    return false;
    
};

// testing the function
let nums = [1, 2, 3, 1];
let indexDiff = 3;
let valueDiff = 0;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // true

nums = [1, 0, 1, 1];
indexDiff = 1;
valueDiff = 2;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // true

nums = [1, 5, 9, 1, 5, 9];
indexDiff = 2;
valueDiff = 3;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // false

nums = [1, 2, 3, 1, 2, 3];
indexDiff = 2;
valueDiff = 0;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // false

nums = [99, 99];
indexDiff = 2;
valueDiff = 2;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // true

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
indexDiff = 3;
valueDiff = 3;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // true

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
indexDiff = 2;
valueDiff = 3;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)); // false