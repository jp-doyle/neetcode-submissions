class Solution {

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // O(n) time, O(n) space

    topKFrequent(nums, k) {

        let hashTable = {};
        let counts = [];
        let solution = [];
        let counter = k;

        counts.length = nums.length + 1;
        for (let i = 0; i < counts.length; i++) counts[i] = [];

        // Populate a hash table with count for each num
        
        for (const num of nums) {
            if (num in hashTable) {
                hashTable[num] += 1;
            } else {
                hashTable[num] = 1;
            }
        }

        // Populate counts array with number of each count

        for (const num in hashTable) {
            counts[hashTable[num]].push(Number(num));
        }

        // Populate solution array with k most frequent numbers

        for (let i = counts.length - 1; i >= 0; i--) {
            if (counter > 0) {
                for (const num of counts[i]) {
                    if (counter > 0) {
                        solution.push(num);
                        counter -= 1;
                    } else {
                        break
                    }
                }
            } else {
                break;
            }
        }

        return solution;
    }
}
