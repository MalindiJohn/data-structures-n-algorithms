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

// testing the function
console.log(countSmaller([5, 2, 6, 1])); // [2, 1, 1, 0]
console.log(countSmaller([-1])); // [0]
console.log(countSmaller([-1, -1])); // [0, 0]
console.log(countSmaller([-1, -1, -1])); // [0, 0, 0]
console.log(countSmaller([-1, -1, -1, -1])); // [0, 0, 0, 0]
console.log(countSmaller([1, 2, 3, 4])); // [0, 0, 0, 0]
console.log(countSmaller([4, 3, 2, 1])); // [3, 2, 1, 0]
console.log(countSmaller([1, 1, 1, 1])); // [0, 0, 0, 0]
console.log(countSmaller([1, 1, 1, 1, 1])); // [0, 0, 0, 0, 0]
console.log(countSmaller([1, 2, 3, 4, 5])); // [0, 0, 0, 0, 0]
console.log(countSmaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]
console.log(countSmaller([1, 2, 3, 4, 5, 6])); // [0, 0, 0, 0, 0, 0]
console.log(countSmaller([6, 5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1, 0]
console.log(countSmaller([1, 2, 3, 4, 5, 6, 7])); // [0, 0, 0, 0, 0, 0, 0]
console.log(countSmaller([7, 6, 5, 4, 3, 2, 1])); // [6, 5, 4, 3, 2, 1, 0]
console.log(countSmaller([1, 2, 3, 4, 5, 6, 7, 8])); // [0, 0, 0, 0, 0, 0, 0, 0]
console.log(countSmaller([8, 7, 6, 5, 4, 3, 2, 1])); // [7, 6, 5, 4, 3, 2, 1, 0]