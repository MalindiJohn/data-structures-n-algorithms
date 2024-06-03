function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let bucket = Math.floor(nums[i] / (valueDiff + 1));
        if (map.has(bucket) ||
            map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= valueDiff ||
            map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) <= valueDiff) {
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
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)); // expected true
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)); // expected true
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // expected false
console.log(containsNearbyAlmostDuplicate([99, 99], 2, 2)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 2, 0)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 0, 0)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 1, 0)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 4, 0)); // expected true
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 5, 0)); // expected true
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 6, 0)); // expected true
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 7, 0)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 8, 0)); // expected false
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 9, 0)); // expected false