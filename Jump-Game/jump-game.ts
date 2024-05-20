function canJump(nums: number[]): boolean {

    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) {
            return false;
        }
        farthest = Math.max(farthest, i + nums[i]);
    }

    return true;

};

// testing the function
console.log(canJump([2, 3, 1, 1, 4])); // expected true
console.log(canJump([3, 2, 1, 0, 4])); // expected false
console.log(canJump([0])); // expected true