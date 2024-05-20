function insert(intervals: number[][], newInterval: number[]): number[][] {

    const result: number[][] = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;

};

// testing the function
console.log(insert([[1, 3], [6, 9]], [2, 5])); // expected [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // expected [[1,2],[3,10],[12,16]]
console.log(insert([], [5, 7])); // expected [[5,7]]
console.log(insert([[1, 5]], [2, 3])); // expected [[1,5]]
console.log(insert([[1, 5]], [2, 7])); // expected [[1,7]]
console.log(insert([[1, 5]], [6, 8])); // expected [[1,5],[6,8]]
console.log(insert([[1, 5]], [0, 0])); // expected [[0,0],[1,5]]
console.log(insert([[1, 5]], [0, 1])); // expected [[0,5]]
console.log(insert([[1, 5]], [0, 2])); // expected [[0,5]]
console.log(insert([[1, 5]], [0, 3])); // expected [[0,5]]
console.log(insert([[1, 5]], [0, 4])); // expected [[0,5]]
console.log(insert([[1, 5]], [0, 5])); // expected [[0,5]]
console.log(insert([[1, 5]], [0, 6])); // expected [[0,6]]
console.log(insert([[1, 5]], [0, 7])); // expected [[0,7]]
console.log(insert([[1, 5]], [0, 8])); // expected [[0,8]]
console.log(insert([[1, 5]], [0, 9])); // expected [[0,9]]
console.log(insert([[1, 5]], [0, 10])); // expected [[0,10]]
console.log(insert([[1, 5]], [0, 11])); // expected [[0,11]]
console.log(insert([[1, 5]], [0, 12])); // expected [[0,12]]
console.log(insert([[1, 5]], [0, 13])); // expected [[0,13]]
console.log(insert([[1, 5]], [0, 14])); // expected [[0,14]]
console.log(insert([[1, 5]], [0, 15])); // expected [[0,15]]