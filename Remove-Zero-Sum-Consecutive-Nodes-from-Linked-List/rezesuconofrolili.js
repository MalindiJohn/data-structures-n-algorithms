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
var removeZeroSumSublists = function(head) {

    let dummy = new ListNode(0);
    dummy.next = head;
    let map = new Map();
    let sum = 0;
    for (let node = dummy; node !== null; node = node.next) {
        sum += node.val;
        map.set(sum, node);
    }
    sum = 0;
    for (let node = dummy; node !== null; node = node.next) {
        sum += node.val;
        node.next = map.get(sum).next;
    }
    return dummy.next;
    
};