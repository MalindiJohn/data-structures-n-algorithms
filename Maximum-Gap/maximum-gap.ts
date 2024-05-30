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