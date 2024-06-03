function summaryRanges(nums: number[]): string[] {

    let result: string[] = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
        }
        if (start === nums[i]) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[i]}`);
        }
    }

    return result;

};

// testing the function
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // expected ["0->2", "4->5", "7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // expected ["0", "2->4", "6", "8->9"]
console.log(summaryRanges([])); // expected []
console.log(summaryRanges([-1])); // expected ["-1"]
console.log(summaryRanges([0])); // expected ["0"]
console.log(summaryRanges([0, 1])); // expected ["0->1"]
console.log(summaryRanges([0, 1, 2])); // expected ["0->2"]
console.log(summaryRanges([0, 2, 4])); // expected ["0", "2", "4"]
console.log(summaryRanges([0, 1, 2, 3])); // expected ["0->3"]
console.log(summaryRanges([0, 1, 2, 4])); // expected ["0->2", "4"]
console.log(summaryRanges([0, 1, 3, 4])); // expected ["0->1", "3->4"]
console.log(summaryRanges([0, 1, 3, 4, 5])); // expected ["0->1", "3->5"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7])); // expected ["0->1", "3->5", "7"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8])); // expected ["0->1", "3->5", "7->8"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8, 9])); // expected ["0->1", "3->5", "7->9"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8, 9, 10])); // expected ["0->1", "3->5", "7->10"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8, 9, 10, 12])); // expected ["0->1", "3->5", "7->10", "12"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 13])); // expected ["0->1", "3->5", "7->10", "12->13"]
console.log(summaryRanges([0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14])); // expected ["0->1", "3->5", "7->10", "12->14"]