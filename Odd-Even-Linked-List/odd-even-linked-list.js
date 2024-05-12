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
var oddEvenList = function(head) {

    if (!head) {
        return null;
    }
    
    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    
    return head;
    
};

// Testing the function
console.log(oddEvenList([1,2,3,4,5])) // output [1,3,5,2,4]
console.log(oddEvenList([2,1,3,5,6,4,7])) // output [2,3,6,7,1,5,4]