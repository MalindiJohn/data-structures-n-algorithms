function wordBreak(s: string, wordDict: string[]): string[] {

    let wordSet = new Set(wordDict);
    let memo = new Map<number, string[]>();
    return dfs(0, s, wordSet, memo);

};