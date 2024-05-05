/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    let sorted = nums.sort((a, b) => {
        return `${b}${a}` - `${a}${b}`;
    });
    
    if (sorted[0] === 0) return '0';
    
    return sorted.join('');
    
};