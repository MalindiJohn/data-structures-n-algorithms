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