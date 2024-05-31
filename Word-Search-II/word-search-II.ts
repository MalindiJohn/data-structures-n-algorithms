function findWords(board: string[][], words: string[]): string[] {

    const trie = new Trie();
    words.forEach(word => trie.insert(word));

    const result = [];
    const m = board.length;
    const n = board[0].length;

    const dfs = (i: number, j: number, node: TrieNode) => {
        if (i < 0 || i >= m || j < 0 || j >= n) return;
        const c = board[i][j];
        if (c === '#' || !node.children.has(c)) return;

        const nextNode = node.children.get(c);
        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = null;
        }

        board[i][j] = '#';
        dfs(i + 1, j, nextNode);
        dfs(i - 1, j, nextNode);
        dfs(i, j + 1, nextNode);
        dfs(i, j - 1, nextNode);
        board[i][j] = c;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trie.root);
        }
    }

    return result;

};

class TrieNode {
    children: Map<string, TrieNode>;
    word: string;
    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string) {
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