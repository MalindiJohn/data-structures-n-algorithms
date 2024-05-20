/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    let result = [];
    let n = intervals.length;
    let i = 0;

    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    result.push(newInterval);

    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
    
};

// Testing the function
console.log(insert([[1, 3], [6, 9]], [2, 5]));
// Output [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// Output [[1,2],[3,10],[12,16]]
console.log(insert([], [5, 7]));
// Output [[5,7]]