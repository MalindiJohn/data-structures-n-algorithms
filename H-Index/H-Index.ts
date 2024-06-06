function hIndex(citations: number[]): number {

    let n: number = citations.length;
    let left: number = 0;
    let right: number = n - 1;
    let hIndex: number = 0;

    while (left <= right) {
        let mid: number = left + Math.floor((right - left) / 2);
        if (citations[mid] >= n - mid) {
            hIndex = n - mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return hIndex;

};