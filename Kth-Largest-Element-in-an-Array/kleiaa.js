/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    return quickSelect(nums, 0, nums.length - 1, k);
    
};

function quickSelect(nums, left, right, k) {

    if (left === right) {
        return nums[left];
    }
    
    let pivotIndex = left + Math.floor(Math.random() * (right - left));
    pivotIndex = partition(nums, left, right, pivotIndex);
    
    if (k === pivotIndex + 1) {
        return nums[pivotIndex];
    } else if (k < pivotIndex + 1) {
        return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k);
    }

}

function partition(nums, left, right, pivotIndex) {
    let pivot = nums[pivotIndex];
    swap(nums, pivotIndex, right);
    
    let storeIndex = left;
    
    for (let i = left; i < right; i++) {
        if (nums[i] > pivot) {
            swap(nums, i, storeIndex);
            storeIndex++;
        }
    }
    
    swap(nums, storeIndex, right);
    
    return storeIndex;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// testing the function
console.log(findKthLargest([3,2,1,5,6,4], 2)); // expected 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // expected 4
console.log(findKthLargest([1], 1)); // expected 1
console.log(findKthLargest([1,2], 2)); // expected 1
console.log(findKthLargest([1,2,3], 3)); // expected 1
console.log(findKthLargest([1,2,3,4], 4)); // expected 1
console.log(findKthLargest([1,2,3,4], 1)); // expected 4