function wordBreak(s: string, wordDict: string[]): string[] {

    let wordSet = new Set(wordDict);
    let memo = new Map<number, string[]>();
    return dfs(0, s, wordSet, memo);

};

function dfs(start: number, s: string, wordSet: Set<string>, memo: Map<number, string[]>): string[] {


}