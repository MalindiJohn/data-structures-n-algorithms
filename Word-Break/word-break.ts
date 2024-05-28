function wordBreak(s: string, wordDict: string[]): boolean {

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
console.log(wordBreak("leetcode", ["leet", "code"])); // expected true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // expected true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // expected false