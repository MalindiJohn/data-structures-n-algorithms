/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

    let result = [];
    let wordSet = new Set(wordDict);
    let memo = new Map();
    
    let dfs = (start) => {
        if (memo.has(start)) {
            return memo.get(start);
        }
        
        if (start === s.length) {
            return [""];
        }
        
        let res = [];
        for (let end = start + 1; end <= s.length; end++) {
            let word = s.substring(start, end);
            if (wordSet.has(word)) {
                let list = dfs(end);
                for (let next of list) {
                    res.push(word + (next ? " " + next : ""));
                }
            }
        }
        
        memo.set(start, res);
        return res;
    };
    
    result = dfs(0);
    return result;
    
};

// testing the function
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); // ["cats and dog", "cat sand dog"]
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat"])); // ["cats and dog", "cat sand dog"]
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat", "sanddog"])); // ["cats and dog", "cat sand dog"]