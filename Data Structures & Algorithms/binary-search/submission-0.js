class Solution {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums, target) {

        // O(n log n) time, O(n log n) where n = length of nums array

        function bin(i1, i2) {

            if (i2 > i1) {

                let m = Math.floor((i1 + i2) / 2);
                let n = nums[m];
                if (n > target) return bin(i1, m);
                if (n < target) return bin(m + 1, i2);
                return m;

            } else {

                if (nums[i1] === target) return i1;
                return -1;
            }
        }
        return bin(0, nums.length - 1);
    }
}