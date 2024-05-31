function minSubArrayLen(target: number, nums: number[]): number {

    let left = 0;
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min;

};

// testing the function
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // 5
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5])); // 0
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5, 100])); // 1
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5, 100, 100])); // 1
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5, 100, 100, 100])); // 1