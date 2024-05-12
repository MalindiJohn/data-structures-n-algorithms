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

    //check if the head is null 
    if (!head) {
        return null;
    }
    
    //define the odd, even and even head
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
console.log(oddEvenList([])) // output []
console.log(oddEvenList([1])) // output [1]
console.log(oddEvenList([1,2])) // output [1,2]
console.log(oddEvenList([1,2,3])) // output [1,3,2]
console.log(oddEvenList([1,2,3,4])) // output [1,3,2,4]
console.log(oddEvenList([1,2,3,4,5])) // output [1,3,5,2,4]
console.log(oddEvenList([1,2,3,4,5,6])) // output [1,3,5,2,4,6]
console.log(oddEvenList([1,2,3,4,5,6,7])) // output [1,3,5,7,2,4,6]
console.log(oddEvenList([1,2,3,4,5,6,7,8])) // output [1,3,5,7,2,4,6,8]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9])) // output [1,3,5,7,9,2,4,6,8]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10])) // output [1,3,5,7,9,2,4,6,8,10]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11])) // output [1,3,5,7,9,11,2,4,6,8,10]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12])) // output [1,3,5,7,9,11,2,4,6,8,10,12]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13])) // output [1,3,5,7,9,11,13,2,4,6,8,10,12]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14])) // output [1,3,5,7,9,11,13,2,4,6,8,10,12,14]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])) // output [1,3,5,7,9,11,13,15,2,4,6,8,10,12,14]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])) // output [1,3,5,7,9,11,13,15,2,4,6,8,10,12,14,16]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])) // output [1,3,5,7,9,11,13,15,17,2,4,6,8,10,12,14,16]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])) // output [1,3,5,7,9,11,13,15,17,2,4,6,8,10,12,14,16,18]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])) // output [1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])) // output [1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])) // output [1,3,5,7,9,11,13,15,17,19,21,2,4,6,8,10,12,14,16,18,20]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])) // output [1,3,5,7,9,11,13,15,17,19,21,2,4,6,8,10,12,14,16,18,20,22]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])) // output [1,3,5,7,9,11,13,15,17,19,21,23,2,4,6,8,10,12,14,16,18,20,22]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])) // output [1,3,5,7,9,11,13,15,17,19,21,23,2,4,6,8,10,12,14,16,18,20,22,24]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])) // output [1,3,5,7,9,11,13,15,17,19,21,23,25,2,4,6,8,10,12,14,16,18,20,22,24]
console.log(oddEvenList([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])) // output [1,3,5,7,9,11,13,15,17,19,21,23,25,2,4,6,8,10,12,14,16,18,20,22,24,26]