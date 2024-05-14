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

// Testing the function
console.log(removeZeroSumSublists(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(1))))))); // Output ListNode { val: 3, next: ListNode { val: 1, next: null } }
console.log(removeZeroSumSublists(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(-2))))))); // Output ListNode { val: 1, next: null }
console.log(removeZeroSumSublists(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(-2, new ListNode(1))))))); // Output ListNode { val: 1, next: null }