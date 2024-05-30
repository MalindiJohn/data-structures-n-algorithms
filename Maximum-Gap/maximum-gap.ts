function maximumGap(nums: number[]): number {

    if (nums.length < 2) return 0;

    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let gap = Math.ceil((max - min) / (nums.length - 1));

    if (gap === 0) return 0;

    let buckets = Array.from({ length: Math.ceil((max - min) / gap) }, () => ({ min: Infinity, max: -Infinity }));

    for (let num of nums) {
        let i = Math.floor((num - min) / gap);
        buckets[i].min = Math.min(buckets[i].min, num);
        buckets[i].max = Math.max(buckets[i].max, num);
    }

    let maxGap = 0;
    let prev = min;

    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue;
        maxGap = Math.max(maxGap, bucket.min - prev);
        prev = bucket.max;
    }

    return maxGap;

};

// testing the function
console.log(maximumGap([3, 6, 9, 1])); // 3
console.log(maximumGap([10])); // 0
console.log(maximumGap([1, 10000000])); // 9999999
console.log(maximumGap([1, 3, 100])); // 97
console.log(maximumGap([1, 3, 100, 200])); // 97
console.log(maximumGap([1, 3, 100, 200, 300])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500, 600])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500, 600, 700])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500, 600, 700, 800])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500, 600, 700, 800, 900])); // 97
console.log(maximumGap([1, 3, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000])); // 97