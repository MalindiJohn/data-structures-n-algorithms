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