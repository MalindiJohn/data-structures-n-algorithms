/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    let count1 = 0;
    let count2 = 0;
    let candidate1 = null;
    let candidate2 = null;

    for (let num of nums) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1++;
        } else if (count2 === 0) {
            candidate2 = num;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        }
    }

    let result = [];
    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }
    if (count2 > nums.length / 3) {
        result.push(candidate2);
    }

    return result;
    
};

// testing the function
let nums = [3, 2, 3];
console.log(majorityElement(nums)); // [3]

nums = [1, 1, 1, 3, 3, 2, 2, 2];
console.log(majorityElement(nums)); // [1, 2]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(majorityElement(nums)); // []

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9];
console.log(majorityElement(nums)); // [9]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9];
console.log(majorityElement(nums)); // [9]