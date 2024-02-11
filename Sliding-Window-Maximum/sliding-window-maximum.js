/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    let result = [];
    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[deque.length - 1] < nums[i]) {
            deque.pop();
        }
        deque.push(nums[i]);
        if (i >= k - 1) {
            result.push(deque[0]);
            if (deque[0] === nums[i - k + 1]) {
                deque.shift();
            }
        }
    }
    return result;
    
};

// testing the function
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 4;
console.log(maxSlidingWindow(nums, k)); // [3, 5, 5, 6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 5;
console.log(maxSlidingWindow(nums, k)); // [5, 5, 6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 6;
console.log(maxSlidingWindow(nums, k)); // [5, 6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 7;
console.log(maxSlidingWindow(nums, k)); // [6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 8;
console.log(maxSlidingWindow(nums, k)); // [7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 1;
console.log(maxSlidingWindow(nums, k)); // [1, 3, -1, -3, 5, 3, 6, 7]

nums = [1, 3, -1, -3, 5, 3, 6, 7];
k = 2;
console.log(maxSlidingWindow(nums, k)); // [3, 3, -1, 5, 5, 6, 7]