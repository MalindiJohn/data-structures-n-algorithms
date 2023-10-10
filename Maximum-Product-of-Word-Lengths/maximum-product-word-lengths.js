/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {

    let max = 0;
    let bitMap = new Array(words.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            bitMap[i] |= 1 << words[i].charCodeAt(j) - 97;
        }
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((bitMap[i] & bitMap[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }

    return max;
    
};

// testing the function
const words = ["abcw","baz","foo","bar","xtfn","abcdef"];
console.log(maxProduct(words)); // 16

const words2 = ["a","ab","abc","d","cd","bcd","abcd"];
console.log(maxProduct(words2)); // 4