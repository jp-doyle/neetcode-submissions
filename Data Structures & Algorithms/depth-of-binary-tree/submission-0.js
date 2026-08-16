/**
 * Definition for a binary tree root.
 * class Treeroot {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    /**
     * @param {Treeroot} root
     * @return {number}
     */

    // Depth-first search
    // O(n) time, O(h) space, where n = number of nodes in tree and h = height

    maxDepth(root) {
        if (root === null) return 0
        if (root.left === null && root.right === null) return 1
        let leftMax = this.maxDepth(root.left)
        let rightMax = this.maxDepth(root.right)
        return (Math.max(leftMax,rightMax) + 1)
    }
}