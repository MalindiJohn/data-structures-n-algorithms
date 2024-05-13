/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if (!root || root === p || root === q) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if (left && right) {
        return root;
    }
    
    return left || right;
    
};

// Testing the function
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 4)); // Output: 5
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 2)); // Output: 3