function containsNearbyDuplicate(nums: number[], k: number): boolean {

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
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // expected true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // expected false
console.log(containsNearbyDuplicate([99, 99], 2)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 0)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 1)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 4)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 5)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 6)); // expected true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 7)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 8)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 9)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 10)); // expected false
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 11)); // expected false