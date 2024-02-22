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
 * @return {TreeNode}
 */
var invertTree = function(root) {


    //check if the binary is null
    if(root === null){

        return null;
    }

    //temporarily store left of root
    var temp = root.left;


    //invert the left subtree recursively
    root.left = invertTree(root.right);

    //update the right child to be the one we temporarily stored in temp
    root.right = invertTree(temp);

    //the inverted  tree should have the left and right children switched so return it
    return root;
    
};