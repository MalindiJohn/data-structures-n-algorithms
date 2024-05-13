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

// Testing the function
console.log(kthSmallest([3,1,4,null,2], 1)); // Output: 1
console.log(kthSmallest([5,3,6,2,4,null,null,1], 3)); // Output: 3
console.log(kthSmallest([5,3,6,2,4,null,null,1], 4)); // Output: 4
console.log(kthSmallest([5,3,6,2,4,null,null,1], 5)); // Output: 5
console.log(kthSmallest([5,3,6,2,4,null,null,1], 6)); // Output: 6
console.log(kthSmallest([5,3,6,2,4,null,null,1], 7)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 8)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 9)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 10)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 11)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 12)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 13)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 14)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 15)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 16)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 17)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 18)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 19)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 20)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 21)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 22)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 23)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 24)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 25)); // Output: null
console.log(kthSmallest([5,3,6,2,4,null,null,1], 26)); // Output: null
