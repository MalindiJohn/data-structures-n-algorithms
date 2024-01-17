function majorityElement(nums: number[]): number[] {

    let count1 = 0;
    let count2 = 0;
    let candidate1 = 0;
    let candidate2 = 0;

    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1++;
        } else if (count2 === 0) {
            candidate2 = num;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;

    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    let result = [];

    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }

    if (count2 > nums.length / 3) {
        result.push(candidate2);
    }

    return result;

};