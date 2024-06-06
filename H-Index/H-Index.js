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