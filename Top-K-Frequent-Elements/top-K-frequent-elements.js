/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const map = new Map();
    const bucket = new Array(nums.length + 1).fill().map(() => []);
    const result = [];
    
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    for (const [num, freq] of map) {
        bucket[freq].push(num);
    }
    
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...bucket[i]);
    }
    
    return result;
    
};