
var Trie = function() {

    this.root = {};
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
            node[word[i]] = {};
        }
        node = node[word[i]];
    }
    
    node.isEnd = true;
    
};

