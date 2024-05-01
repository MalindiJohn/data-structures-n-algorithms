/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let seenOnce = 0, seenTwice = 0;
    for(let i = 0; i < nums.length; i++){
        seenOnce = ~seenTwice & (seenOnce ^ nums[i]);
        seenTwice = ~seenOnce & (seenTwice ^ nums[i]);
    }
    return seenOnce;
    
};