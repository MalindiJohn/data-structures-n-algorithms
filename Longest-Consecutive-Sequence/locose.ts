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