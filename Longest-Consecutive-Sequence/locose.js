/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) {
        return 0;
    }

    let set = new Set(nums);
    let max = 1;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentMax = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentMax++;
            }

            max = Math.max(max, currentMax);
        }
    }

    return max;
    
};