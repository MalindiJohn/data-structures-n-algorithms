/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let result = [];
    let i = 0;
    while (i < nums.length) {
        let start = i;
        i++;
        while (i < nums.length && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        let end = i - 1;
        if (start === end) {
            result.push(nums[start].toString());
        } else {
            result.push(nums[start] + '->' + nums[end]);
        }
    }
    return result;
    
};