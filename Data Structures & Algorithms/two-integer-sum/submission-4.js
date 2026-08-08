class Solution {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {

        // O(n) time, O(n) space

        let hashTable = {};

        for (let i = 0; i < nums.length; i++) {
            
            let pair = target - nums[i];
            let num = nums[i];

            if (num in hashTable) return [hashTable[num], i];
            else hashTable[pair] = i;
        }
    }
}
