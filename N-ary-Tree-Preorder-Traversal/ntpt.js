/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {

    let result = [];
    
    function traverse(node) {
        
        if (!node) return;
        
        result.push(node.val);
        
        for (let i = 0; i < node.children.length; i++) {
            
            traverse(node.children[i]);
            
        }
        
    }
    
    traverse(root);
    
    return result;
    
};

console.log(preorder([1,null,3,2,4,null,5,6])); // [1,3,5,6,2,4]
console.log(preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])); // [1,2,3,6,7,11,14,4,8,12,5,9,13,10]