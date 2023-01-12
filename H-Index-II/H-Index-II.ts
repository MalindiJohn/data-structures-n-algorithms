function hIndex(citations: number[]): number {

    let n: number = citations.length;
    let left: number = 0;
    let right: number = n - 1;

    while (left <= right) {
        let mid: number = left + Math.floor((right - left) / 2);
        if (citations[mid] === n - mid) {
            return n - mid;
        } else if (citations[mid] < n - mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return n - left;

};

// testing the function
console.log(hIndex([0, 1, 3, 5, 6])); // expected output : 3
console.log(hIndex([0, 1, 3, 5, 6, 7])); // expected output : 4
console.log(hIndex([0, 1, 3, 5, 6, 7, 8])); // expected output : 4