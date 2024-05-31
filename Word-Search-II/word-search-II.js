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

var dfs = function(board, i, j, node, result) {
    
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return;
    }
    
    let c = board[i][j];
    
    if (c === '#' || !node.children.has(c)) {
        return;
    }
    
    node = node.children.get(c);
    
    if (node.word) {
        result.push(node.word);
        node.word = null;
    }
    
    board[i][j] = '#';
    
    dfs(board, i+1, j, node, result);
    dfs(board, i-1, j, node, result);
    dfs(board, i, j+1, node, result);
    dfs(board, i, j-1, node, result);
    
    board[i][j] = c;
    
};