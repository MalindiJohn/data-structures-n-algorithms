/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    let trie = new Trie();
    let result = [];
    
    for (let word of words) {
        trie.insert(word);
    }
    
    let m = board.length;
    let n = board[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(board, i, j, trie.root, result);
        }
    }
    
    return result;
    
};