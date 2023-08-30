function countSmaller(nums: number[]): number[] {

    let n = nums.length;
    let res = new Array(n).fill(0);
    let sorted = [];
    for (let i = n - 1; i >= 0; i--) {
        let index = binarySearch(sorted, nums[i]);
        res[i] = index;
        sorted.splice(index, 0, nums[i]);
    }
    return res;

};

function binarySearch(sorted: number[], target: number): number {
    let left = 0, right = sorted.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (sorted[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}