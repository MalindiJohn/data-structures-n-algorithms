/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {

    const n = nums.length;
    const sorted = nums.slice().sort((a, b) => a - b);
    let i = n - 1;
    for (let j = 1; j < n; j += 2) {
        nums[j] = sorted[i--];
    }
    for (let j = 0; j < n; j += 2) {
        nums[j] = sorted[i--];
    }

};