/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    const stack = [];
    let node = root;
    
    while (true) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        
        node = stack.pop();
        
        if (--k === 0) {
            return node.val;
        }
        
        node = node.right;
    }
    
};