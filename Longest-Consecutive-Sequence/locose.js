/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length === 0) {
        return 0;
    }

    let set = new Set(nums);
    let max = 1;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentMax = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentMax++;
            }

            max = Math.max(max, currentMax);
        }
    }

    return max;
    
};

// testing the function
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([1,2,0,1])); // 3