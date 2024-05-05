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

//testing the function
console.log(largestNumber([10,2])); // "210"
console.log(largestNumber([3,30,34,5,9])); // "9534330"