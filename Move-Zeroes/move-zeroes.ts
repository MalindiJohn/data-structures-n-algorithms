/**
Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let n: number = nums.length;
    let left: number = 0;
    let right: number = 0;

    while (right < n) {
        if (nums[right] !== 0) {
            let temp: number = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }

};