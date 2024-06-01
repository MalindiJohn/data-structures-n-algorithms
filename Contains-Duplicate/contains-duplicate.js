/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let set = new Set();
    
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    
    return false;
    
};

// testing the function
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0])); // false
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1,2])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1,2,3])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1,2,3,4])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5])); // true
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6])); // true