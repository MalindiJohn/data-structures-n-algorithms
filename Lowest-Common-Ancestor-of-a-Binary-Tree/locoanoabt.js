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
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 8)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 0)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 0)); // Output: 1
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 8)); // Output: 1
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 4)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 7)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 6)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 2)); // Output: 1
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 5)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 3)); // Output: 3
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 1)); // Output: 1
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 9)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 10)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 11)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 12)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 13)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 14)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 15)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 16)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 17)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 18)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 19)); // Output: null
console.log(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 1, 20)); // Output: null