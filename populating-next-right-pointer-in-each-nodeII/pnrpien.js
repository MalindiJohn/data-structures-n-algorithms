/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

    if(!root) return root;
    let queue = [root];
    while(queue.length > 0){
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(i < size - 1){
                node.next = queue[0];
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return root;
    
};

console.log(connect([1,2,3,4,5,null,7])); // [1,#,2,3,#,4,5,7,#]
console.log(connect([])); // []