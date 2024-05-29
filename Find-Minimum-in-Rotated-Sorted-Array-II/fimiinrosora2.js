/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return nums[left];
    
};

// testing the function
console.log(findMin([3,4,5,1,2])); // 1
console.log(findMin([4,5,6,7,0,1,2])); // 0
console.log(findMin([11,13,15,17])); // 11
console.log(findMin([1,2,3,4,5,6,7,8,9,10])); // 1
console.log(findMin([10,1,2,3,4,5,6,7,8,9])); // 1
console.log(findMin([9,10,1,2,3,4,5,6,7,8])); // 1
console.log(findMin([8,9,10,1,2,3,4,5,6,7])); // 1
console.log(findMin([7,8,9,10,1,2,3,4,5,6])); // 1
console.log(findMin([6,7,8,9,10,1,2,3,4,5])); // 1
console.log(findMin([5,6,7,8,9,10,1,2,3,4])); // 1
console.log(findMin([4,5,6,7,8,9,10,1,2,3])); // 1
console.log(findMin([3,4,5,6,7,8,9,10,1,2])); // 1
console.log(findMin([2,3,4,5,6,7,8,9,10,1])); // 1
console.log(findMin([1,2,3,4,5,6,7,8,9,10])); // 1
console.log(findMin([10])); // 10
console.log(findMin([10,10])); // 10
console.log(findMin([10,10,10])); // 10