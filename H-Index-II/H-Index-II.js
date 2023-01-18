/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    let n = citations.length;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
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
let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations)); // 3

citations = [1, 3, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1];
console.log(hIndex(citations)); // 1