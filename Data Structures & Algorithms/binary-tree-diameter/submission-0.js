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
     * @return {number}
     */

    diameterOfBinaryTree(root) {

        // O(n) time, O(h) space, where n = number of nodes in root, and h = height

        let dfsReturn = {}

        function dfs(node) {
            
            let leftDfs = {};
            let rightDfs = {};
            let greaterHeight = 0;
            let lAndRHeights = 0;
            let greaterDiameter = 0;

            if (!node) return { height: 0, diameter: 0 };
            leftDfs = dfs(node.left);
            rightDfs = dfs(node.right);
            greaterHeight = Math.max(leftDfs.height, rightDfs.height)
            lAndRHeights = leftDfs.height + rightDfs.height
            greaterDiameter = Math.max(leftDfs.diameter, rightDfs.diameter, lAndRHeights)

            return { height: greaterHeight + 1, diameter: greaterDiameter }
        }

        dfsReturn = dfs(root)
        return Math.max(dfsReturn.height - 1, dfsReturn.diameter)
    }
}