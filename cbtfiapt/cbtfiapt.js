/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    if (!inorder.length || !postorder.length) return null;
    
    let root = new TreeNode(postorder.pop());
    let mid = inorder.indexOf(root.val);
    
    root.right = buildTree(inorder.slice(mid + 1), postorder);
    root.left = buildTree(inorder.slice(0, mid), postorder);
    
    return root;
    
};

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3])); // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])); // [-1]
console.log(buildTree([2,3,1], [3,2,1])); // [1,2,null,3]