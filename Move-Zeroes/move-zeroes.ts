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

// testing the function
let arr: number[] = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // expected output : [1,3,12,0,0]

arr = [0];
moveZeroes(arr);
console.log(arr); // expected output : [0]