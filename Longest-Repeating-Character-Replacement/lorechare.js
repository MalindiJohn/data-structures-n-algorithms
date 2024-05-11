/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let maxCount = 0;
    let left = 0;
    let right = 0;
    const count = new Array(26).fill(0);
    
    while (right < s.length) {
        const index = s.charCodeAt(right) - 65;
        count[index]++;
        maxCount = Math.max(maxCount, count[index]);
        if (right - left + 1 - maxCount > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }
        right++;
    }
    
    return right - left;
    
};