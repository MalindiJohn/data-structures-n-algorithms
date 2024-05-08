/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    let map = new Map();
    let max = 0;
    let count = 0;
    
    map.set(0, -1);
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 1 ? 1 : -1;
        if (map.has(count)) {
            max = Math.max(max, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    
    return max;
    
};

// testing the function
console.log(findMaxLength([0,1])); // expected 2
console.log(findMaxLength([0,1,0])); // expected 2
console.log(findMaxLength([0,1,0,1])); // expected 4
console.log(findMaxLength([0,1,0,1,0])); // expected 4
console.log(findMaxLength([0,1,0,1,0,1])); // expected 6
console.log(findMaxLength([0,1,0,1,0,1,0])); // expected 6
console.log(findMaxLength([0,1,0,1,0,1,0,1])); // expected 8
console.log(findMaxLength([0,1,0,1,0,1,0,1,0])); // expected 8
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1])); // expected 10
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1,0])); // expected 10
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1,0,1])); // expected 12
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1,0,1,0])); // expected 12
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1,0,1,0,1])); // expected 14
console.log(findMaxLength([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0])); // expected 14