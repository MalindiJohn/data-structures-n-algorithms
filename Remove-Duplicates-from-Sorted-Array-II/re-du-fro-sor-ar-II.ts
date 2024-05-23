function removeDuplicates(nums: number[]): number {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count < 2 || nums[i] > nums[count - 2]) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;

};

// testing the function
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // expected 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // expected 7
console.log(removeDuplicates([1, 2, 3])); // expected 3
console.log(removeDuplicates([1, 1, 1])); // expected 2
console.log(removeDuplicates([1, 1])); // expected 2
console.log(removeDuplicates([1])); // expected 1
console.log(removeDuplicates([])); // expected 0
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3])); // expected 7
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 3])); // expected 6
console.log(removeDuplicates([1, 2, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3])); // expected 5
console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])); // expected 5