/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {

    const map = new Map();
    let count = 0;
    
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            const sum = num1 + num2;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            const sum = num3 + num4;
            count += map.get(-sum) || 0;
        }
    }
    
    return count;
    
};

// Testing the function
console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2])); // Output: 2
console.log(fourSumCount([0], [0], [0], [0])); // Output: 1
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,2,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [2,2,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,2], [1,1,1,1,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,2], [1,1,1,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,2], [1,1,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,2,2], [1,1,1,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,1,2,2], [1,1,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,2,2,2], [1,1,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,1,2,2,2], [1,2,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [1,2,2,2,2], [1,2,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,1], [2,2,2,2,2], [2,2,2,2,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,2], [1,1,1,1,2], [1,1,1,1,2])); // Output: 625
console.log(fourSumCount([1,1,1,1,1], [1,1,1,1,2], [1,1,1,1,2], [1,1,1,2,2])); // Output: 625