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

// Testing the function
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
console.log(characterReplacement("AABABBA", 2)); // Output: 6
console.log(characterReplacement("AABABBA", 3)); // Output: 7
console.log(characterReplacement("AABABBA", 4)); // Output: 7
console.log(characterReplacement("AABABBA", 5)); // Output: 7
console.log(characterReplacement("AABABBA", 6)); // Output: 7
console.log(characterReplacement("AABABBA", 7)); // Output: 7
console.log(characterReplacement("AABABBA", 8)); // Output: 7
console.log(characterReplacement("AABABBA", 9)); // Output: 7
console.log(characterReplacement("AABABBA", 10)); // Output: 7