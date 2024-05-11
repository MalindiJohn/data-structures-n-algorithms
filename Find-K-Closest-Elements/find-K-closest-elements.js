/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
    
};

// Testing the function
console.log(findClosestElements([1,2,3,4,5], 4, 3)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, -1)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, 10)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 0)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, 1)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, 2)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, 4)); // Output: [1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, 5)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 6)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 7)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 8)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 9)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 10)); // Output: [2,3,4,5]
console.log(findClosestElements([1,2,3,4,5], 4, 11)); // Output: [2,3,4,5]