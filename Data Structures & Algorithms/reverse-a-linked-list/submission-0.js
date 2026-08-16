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
     * @return {ListNode}
     */

    reverseList(head) {

        // O(n) time, O(1) space, where n = number of nodes in SLL

        if (head === null) return null
        if (head.next === null) return head

        let cNode = head
        let nNode = head.next

        head.next = null

        while (nNode !== null) {
            let n2Node = nNode.next
            nNode.next = cNode
            cNode = nNode
            nNode = n2Node
        }

        return cNode
    }
}