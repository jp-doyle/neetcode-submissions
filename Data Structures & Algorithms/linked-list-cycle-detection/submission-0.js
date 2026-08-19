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
     * @param {ListNode} head
     * @return {boolean}
     */

    hasCycle(head) {

        // O(n) time, O(1) space, where n = number of nodes

        let p1;
        let p2;

        if (head === null) return false;

        p1 = head;
        p2 = head.next;

        while (p1.next !== null && p2.next !== null && p2.next.next !== null) {
            p1 = p1.next;
            p2 = p2.next;
            if (p2 === p1) return true;
            p2 = p2.next;
            if (p2 == p1) return true;
        }
        return false;
    }
}
