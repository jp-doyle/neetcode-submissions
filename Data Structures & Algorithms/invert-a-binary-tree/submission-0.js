/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {

    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */

    invertTree(root) {

        // O(n) time, O(h) time, where n = number of nodes and h = height    

        if (root === null) return null;
        let left = root.left;
        root.left = root.right;
        root.right = left;
        if (root.left !== null) this.invertTree(root.left);
        if (root.right !== null) this.invertTree(root.right);
        return root;
    }
}
