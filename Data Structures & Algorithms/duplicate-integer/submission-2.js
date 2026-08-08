class Solution {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {

        // O(n) time, O(n) space

        // Use a hash table to count numbers

        let hashTable = {}

        for (let i = 0; i < nums.length; i++) {

            let num = nums[i]

            if (num in hashTable) return true
            else hashTable[nums[i]] = true
        }

        return false
    }
}
