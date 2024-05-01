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

console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99