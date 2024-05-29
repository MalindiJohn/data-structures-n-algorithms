function wordBreak(s: string, wordDict: string[]): string[] {

    let wordSet = new Set(wordDict);
    let memo = new Map<number, string[]>();
    return dfs(0, s, wordSet, memo);

};

function dfs(start: number, s: string, wordSet: Set<string>, memo: Map<number, string[]>): string[] {

    if (memo.has(start)) {

        return memo.get(start);

    }

    let result: string[] = [];
    if (start === s.length) {
        result.push('');
    }

    for (let end = start + 1; end <= s.length; end++) {
        let word = s.substring(start, end);
        if (wordSet.has(word)) {
            let list = dfs(end, s, wordSet, memo);
            for (let next of list) {
                result.push(word + (next === '' ? '' : ' ') + next);
            }
        }
    }

    memo.set(start, result);
    return result;

}

// testing the function
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); // expected output : ["cat sand dog", "cats and dog"]
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])); // expected output : ["pine apple pen apple", "pine applepen apple", "pineapple pen apple"]
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // expected output : []
console.log(wordBreak("a", ["a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b"])); // expected output : []
console.log(wordBreak("a", ["a", "b"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["a", "b", "c"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "a", "c"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "d", "e"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "e", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "d", "e", "f"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g", "h"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g", "h", "a"])); // expected output : ["a"]
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g", "h", "i"])); // expected output : []
console.log(wordBreak("a", ["b", "c", "d", "e", "f", "g", "h", "i", "a"])); // expected output : ["a"]