/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    
    let min = [], max = [];
    let left = 0, right = 0;
    let res = 0;
    
    while(right < nums.length) {
        while(min.length > 0 && nums[right] < min[min.length - 1]) {
            min.pop();
        }
        while(max.length > 0 && nums[right] > max[max.length - 1]) {
            max.pop();
        }
        
        min.push(nums[right]);
        max.push(nums[right]);
        
        while(max[0] - min[0] > limit) {
            if(nums[left] === min[0]) {
                min.shift();
            }
            if(nums[left] === max[0]) {
                max.shift();
            }
            left++;
        }
        
        res = Math.max(res, right - left + 1);
        right++;
    }
    
    return res;
};

// testing the function
console.log(longestSubarray([8,2,4,7], 4)); // expected 2
console.log(longestSubarray([10,1,2,4,7,2], 5)); // expected 4
console.log(longestSubarray([4,2,2,2,4,4,2,2], 0)); // expected 3
console.log(longestSubarray([4,8,5,1,7,9], 6)); // expected 3
console.log(longestSubarray([24,12,71,33,5,87,10,11,3,58,2,97,97,36,32,13,14,68,19,100], 19)); // expected 5
console.log(longestSubarray([8], 10)); // expected 1
console.log(longestSubarray([8,2], 10)); // expected 2
console.log(longestSubarray([8,2,4], 10)); // expected 3
console.log(longestSubarray([8,2,4,7], 10)); // expected 4
console.log(longestSubarray([8,2,4,7,1], 10)); // expected 5
console.log(longestSubarray([8,2,4,7,1,3], 10)); // expected 6
console.log(longestSubarray([8,2,4,7,1,3,5], 10)); // expected 7
console.log(longestSubarray([8,2,4,7,1,3,5,6], 10)); // expected 8