/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {

    const n = nums.length;
    const res = new Array(n).fill(0);
    const sorted = [];
    
    for (let i = n - 1; i >= 0; i--) {
        const index = binarySearch(sorted, nums[i]);
        res[i] = index;
        sorted.splice(index, 0, nums[i]);
    }
    
    return res;
    
};

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// testing the function
console.log(countSmaller([5,2,6,1])); // [2,1,1,0]
console.log(countSmaller([-1])); // [0]
console.log(countSmaller([-1,-1])); // [0,0]
console.log(countSmaller([-1,-1,-1])); // [0,0,0]
console.log(countSmaller([-1,-1,-1,-1])); // [0,0,0,0]
console.log(countSmaller([1,2,3,4,5])); // [0,0,0,0,0]
console.log(countSmaller([5,4,3,2,1])); // [4,3,2,1,0]
console.log(countSmaller([1,1,1,1,1])); // [0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1])); // [0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0,0,0,0,0]
console.log(countSmaller([1,1,1,1,1,1,1,1,1,1,1,1])); // [0,0,0,0,0,0,0,0,0,0,0,0]