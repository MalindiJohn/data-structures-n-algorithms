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