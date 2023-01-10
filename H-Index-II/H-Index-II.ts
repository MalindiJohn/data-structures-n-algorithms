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