/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if (!head || !head.next) return head;
    
    let temp = head.next;
    head.next = swapPairs(temp.next);
    temp.next = head;
    
    return temp;
};

console.log(swapPairs([1,2,3,4])); // [2,1,4,3]
console.log(swapPairs([])); // []
console.log(swapPairs([1])); // [1]