/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let last = new Array(26);
    for (let i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    
    let result = [];
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
    
};

// Testing the function
console.log(partitionLabels("abac")); // Output [3, 1]
console.log(partitionLabels("abacdefghijklmnopqrstuvwxyz")); // Output [26]
console.log(partitionLabels("abacdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")); // Output [26, 26]