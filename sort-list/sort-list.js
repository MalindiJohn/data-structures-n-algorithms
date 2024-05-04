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
var sortList = function(head) {

    if (!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    
    while (current) {
        if (current.next && current.next.val < current.val) {
            while (prev.next && prev.next.val < current.next.val) {
                prev = prev.next;
            }
            let temp = prev.next;
            prev.next = current.next;
            current.next = current.next.next;
            prev.next.next = temp;
            prev = dummy;
        } else {
            current = current.next;
        }
    }
    
    return dummy.next;
    
};

//testing the function
console.log(sortList([4,2,1,3])); // [1,2,3,4]
console.log(sortList([-1,5,3,4,0])); // [-1,0,3,4,5]
console.log(sortList([])); //