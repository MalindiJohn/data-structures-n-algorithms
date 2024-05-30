/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {

    if (nums.length < 2) {
        return 0;
    }

    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);
    let maxGap = 0;
    let prevMax = min;
    
    nums.forEach(num => {
        let bucketIndex = Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    });
    
    buckets.forEach(bucket => {
        if (bucket.length === 0) {
            return;
        }
        let currMin = Math.min(...bucket);
        let currMax = Math.max(...bucket);
        maxGap = Math.max(maxGap, currMin - prevMax);
        prevMax = currMax;
    });
    
    return maxGap;
    
};

// testing the function
console.log(maximumGap([3,6,9,1])); // 3
console.log(maximumGap([10])); // 0
console.log(maximumGap([1,10000000])); // 9999999
console.log(maximumGap([1,3,100])); // 97
console.log(maximumGap([1,3,6,9])); // 3
console.log(maximumGap([1,3,6,9,100])); // 91
console.log(maximumGap([1,3,6,9,100,1000])); // 900
console.log(maximumGap([1,3,6,9,100,1000,10000])); // 9000
console.log(maximumGap([1,3,6,9,100,1000,10000,100000])); // 90000
console.log(maximumGap([1,3,6,9,100,1000,10000,100000,1000000])); // 900000
console.log(maximumGap([1,3,6,9,100,1000,10000,100000,1000000,10000000])); // 9000000
console.log(maximumGap([1,3,6,9,100,1000,10000,100000,1000000,10000000,100000000])); // 90000000