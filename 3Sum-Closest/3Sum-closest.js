/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return closest;
    
};

// Testing the function
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output 0
console.log(threeSumClosest([0, 0, 0], 0)); // Output 0