/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {

    let count = 0;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] < nums[i - 1]) {

            count++;

            if (count > 1) return false;

            if (i < 2 || nums[i] >= nums[i - 2]) {

                nums[i - 1] = nums[i];

            } else {

                nums[i] = nums[i - 1];

            }
        }
    }

    return true;
    
};

console.log(checkPossibility([4,2,3])); // true
console.log(checkPossibility([4,2,1])); // false