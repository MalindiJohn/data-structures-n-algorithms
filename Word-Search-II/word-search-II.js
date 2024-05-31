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

class TrieNode {
    
    constructor() {
        this.children = new Map();
        this.word = null;
    }
    
}

class Trie {
    
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }
            node = node.children.get(c);
        }
        node.word = word;
    }
    
}

// testing the function
console.log(findWords([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], ['oath','pea','eat','rain'])); // ["eat","oath"]
console.log(findWords([['a','b'],['c','d']], ['abcb'])); // []
console.log(findWords([['a','b'],['c','d']], ['abcd'])); // ["abcd"]
console.log(findWords([['a','b'],['c','d']], ['ab','cd'])); // ["ab","cd"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc'])); // ["ab"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad'])); // ["ab","ad"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc'])); // ["ab","ad","bc"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd'])); // ["ab","ad","bc","cd"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb'])); // ["ab","ad","bc","cd","cb"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb','ba'])); // ["ab","ad","bc","cd","cb","ba"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb','ba','ac'])); // ["ab","ad","bc","cd","cb","ba","ac"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb','ba','ac','bd'])); // ["ab","ad","bc","cd","cb","ba","ac","bd"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb','ba','ac','bd','ca'])); // ["ab","ad","bc","cd","cb","ba","ac","bd","ca"]
console.log(findWords([['a','b'],['c','d']], ['ab','dc','ad','bc','cd','cb','ba','ac','bd','ca','db'])); // ["ab","ad","bc","cd","cb","ba","ac","bd","ca","db"]