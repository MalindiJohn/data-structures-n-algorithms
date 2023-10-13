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

const words3 = ["a","aa","aaa","aaaa"];
console.log(maxProduct(words3)); // 0

const words4 = ["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"];
console.log(maxProduct(words4)); // 0

const words5 = ["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","yxwvutsrqponmlkjihgfedcba","xwvutsrqponmlkjihgfedcba","wvutsrqponmlkjihgfedcba","vutsrqponmlkjihgfedcba","utsrqponmlkjihgfedcba","tsrqponmlkjihgfedcba","srqponmlkjihgfedcba","rqponmlkjihgfedcba","qponmlkjihgfedcba","ponmlkjihgfedcba","onmlkjihgfedcba","nmlkjihgfedcba","mlkjihgfedcba","lkjihgfedcba","kjihgfedcba","jihgfedcba","ihgfedcba","hgfedcba","gfedcba","fedcba","edcba","dcba","cba","ba","a"];
console.log(maxProduct(words5)); // 0