function jump(nums: number[]): number {

    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }

    return jumps;

};

// testing the function
console.log(jump([2, 3, 1, 1, 4])); // expected 2
console.log(jump([2, 3, 0, 1, 4])); // expected 2
console.log(jump([1, 1, 1, 1, 1])); // expected 4
console.log(jump([1])); // expected 0
console.log(jump([1, 2])); // expected 1
console.log(jump([2, 1])); // expected 1
console.log(jump([1, 2, 3])); // expected 2
console.log(jump([3, 2, 1])); // expected 1
console.log(jump([1, 1, 1, 1])); // expected 3
console.log(jump([1, 1, 1, 1, 1])); // expected 4
console.log(jump([1, 2, 3, 4, 5])); // expected 3
console.log(jump([5, 4, 3, 2, 1])); // expected 1
console.log(jump([1, 1, 1, 1, 1, 1])); // expected 5
console.log(jump([1, 1, 1, 1, 1, 1, 1])); // expected 6
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1])); // expected 7
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1, 1])); // expected 8
console.log(jump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // expected 9