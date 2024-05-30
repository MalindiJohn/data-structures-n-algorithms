function twoSum(numbers: number[], target: number): number[] {

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];

};

// testing the function
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]
console.log(twoSum([5, 25, 75], 100)); // [2, 3]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [1, 9]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // [1, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12)); // [2, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13)); // [3, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)); // [4, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // [5, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16)); // [6, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 17)); // [7, 10]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 18)); // [8, 10]