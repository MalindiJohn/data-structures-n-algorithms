/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    function helper(preStart, inStart, inEnd) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }

        let root = new TreeNode(preorder[preStart]);
        let inIndex = map.get(root.val);
        let leftSize = inIndex - inStart;

        root.left = helper(preStart + 1, inStart, inIndex - 1);
        root.right = helper(preStart + leftSize + 1, inIndex + 1, inEnd);

        return root;
    }

    return helper(0, 0, inorder.length - 1);
    
};