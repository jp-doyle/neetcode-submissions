/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    mergeTwoLists(list1, list2) {

        // O(n + m) time, O(1) space, where n = length of list1 and m = length of list2

        let head, tail, p;

        if (list1 === null && list2 === null) return null;
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        if (list1.val <= list2.val) {
            head = list1;
            tail = list1;
            p = list2;
        } else {
            head = list2;
            tail = list2;
            p = list1;
        }

        while (tail.next !== null && p !== null) {
            if (tail.next.val <= p.val) {
                tail = tail.next;
            } else {
                let nextP = tail.next;
                tail.next = p;
                tail = p;
                p = nextP;
            }
        }
        if (tail.next === null) tail.next = p;
        return head;
    }
}
