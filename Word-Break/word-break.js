/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
    
};

// testing the function
console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog", "catsanddog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog", "catsanddog", "catsand"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog"])); // true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "sand", "dog", "catsanddog", "catsand", "cats", "sanddog", "catsanddog"])); // true