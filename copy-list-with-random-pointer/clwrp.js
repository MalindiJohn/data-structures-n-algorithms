/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    if(!head) return null;
    
    let map = new Map();
    let node = head;
    
    while(node){
        map.set(node, new Node(node.val));
        node = node.next;
    }
    
    node = head;
    while(node){
        map.get(node).next = node.next ? map.get(node.next) : null;
        map.get(node).random = node.random ? map.get(node.random) : null;
        node = node.next;
    }
    
    return map.get(head);
    
};