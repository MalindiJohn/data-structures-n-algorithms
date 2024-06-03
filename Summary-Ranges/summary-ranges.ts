function summaryRanges(nums: number[]): string[] {

    let result: string[] = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
        }
        if (start === nums[i]) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[i]}`);
        }
    }

    return result;

};