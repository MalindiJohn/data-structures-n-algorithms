function longestConsecutive(nums: number[]): number {

    let set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            max = Math.max(max, currentStreak);
        }
    }

    return max;

};

// testing the function
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // expected 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // expected 9
console.log(longestConsecutive([1, 2, 0, 1])); // expected 3
console.log(longestConsecutive([1, 2, 0, 1, 2])); // expected 3
console.log(longestConsecutive([1, 2, 0, 1, 2, 3])); // expected 4
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4])); // expected 5
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5])); // expected 6
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6])); // expected 7
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7])); // expected 8
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8])); // expected 9
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected 10
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected 11
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // expected 12
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected 13
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // expected 14
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // expected 15
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // expected 16
console.log(longestConsecutive([1, 2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])); // expected 17