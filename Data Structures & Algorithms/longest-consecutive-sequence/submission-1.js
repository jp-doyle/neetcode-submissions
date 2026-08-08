class Solution {

    /**
     * @param {number[]} nums
     * @return {number}
     */

    longestConsecutive(nums) {

        // O(n) time, O(n) space, where n = length of nums array

        const hashTable = {};
        const firstNums = {};
        let longestCount = 1;

        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        // Build a hash table with a key for every number

        for (const num of nums) {
            hashTable[num] = true;
        }

        // Identify numbers in the table n without n - 1 in the table

        for (const num of nums) {
            if (num - 1 in hashTable) {
                continue;
            } else {
                firstNums[num] = true;
            }
        }

        // Starting only from those numbers, identify the longest sequence

        for (const firstNum in firstNums) {
            let count = 1;
            let nextNum = Number(firstNum) + 1;
            while (nextNum in hashTable) {
                count += 1;
                nextNum += 1;
            }
            if (count > longestCount) {
                longestCount = count;
            }
        }
        return longestCount;
    }
}