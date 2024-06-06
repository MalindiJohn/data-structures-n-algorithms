/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    citations.sort((a, b) => a - b);
    let n = citations.length;
    let h = 0;
    for (let i = 0; i < n; i++) {
        h = Math.max(h, Math.min(citations[i], n - i));
    }
    return h;
    
};

// testing the function
let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations)); // 3

citations = [1, 3, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1, 1, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1, 1, 1, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1, 1, 1, 1, 1];
console.log(hIndex(citations)); // 1

citations = [1, 3, 1, 1, 1, 1, 1, 1, 1];
console.log(hIndex(citations)); // 1