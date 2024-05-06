
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

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
            return false;
        }
        node = node[word[i]];
    }
    
    return node.isEnd ? true : false;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    let node = this.root;
    
    for (let i = 0; i < prefix.length; i++) {
        if (!node[prefix[i]]) {
            return false;
        }
        node = node[prefix[i]];
    }
    
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */