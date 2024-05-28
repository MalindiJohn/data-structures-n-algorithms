/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }

    return res;
    
};

// testing the function
console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1,1,2])); // 2
console.log(singleNumber([1,2,2])); // 1
console.log(singleNumber([1,2,1])); // 2
console.log(singleNumber([1,2,3,1,2])); // 3
console.log(singleNumber([1,2,3,1,2,3])); // 0
console.log(singleNumber([1,2,3,1,2,3,4])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])); // 4
console.log(singleNumber([1,2,3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])); // 4