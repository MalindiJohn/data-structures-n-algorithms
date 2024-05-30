/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
    
};

// testing the function
console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]
console.log(twoSum([-1,0], -1)); // [1,2]
console.log(twoSum([5,25,75], 100)); // [2,3]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]
console.log(twoSum([1,2,3,4,4,9,56,90], 8)); // [4,5]