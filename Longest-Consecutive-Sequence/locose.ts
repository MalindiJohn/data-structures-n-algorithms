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