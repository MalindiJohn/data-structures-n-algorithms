function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let bucket = Math.floor(nums[i] / (valueDiff + 1));
        if (map.has(bucket) ||
            map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= valueDiff ||
            map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) <= valueDiff) {
            return true;
        }
        map.set(bucket, nums[i]);
        if (i >= indexDiff) {
            map.delete(Math.floor(nums[i - indexDiff] / (valueDiff + 1)));
        }
    }

    return false;

};