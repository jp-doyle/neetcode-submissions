class Solution {

    /**
     * @param {number[]} nums
     * @return {number[]}
     */


    productExceptSelf(nums) {

        // O(n) time, O(n) space

        let leftProducts = [1, nums[0]];
        let rightProductsLeftToRight = [1, nums[nums.length - 1]];
        let rightProductsLeftToRightPointer = 1;
        let rightProductsRightToLeft = [];
        let solution = [];

        // Iterate left to right, populating array leftProducts with products of numbers to the left

        for (let i = 1; i < nums.length - 1; i++) {
            leftProducts.push(leftProducts[i] * nums[i]);
        }

        // Iterate right to left, populating array rightProductsLeftToRight with products of integers to the right

        for (let i = nums.length - 2; i >= 1; i--) {
            rightProductsLeftToRight.push(
                rightProductsLeftToRight[rightProductsLeftToRightPointer] * nums[i],
            );
            rightProductsLeftToRightPointer += 1;
        }
        // Reverse the rightProductsLeftToRight array

        for (let i = rightProductsLeftToRight.length - 1; i >= 0; i--) {
            rightProductsRightToLeft.push(rightProductsLeftToRight[i]);
        }

        // Iterate through arrays, populating a solution array with products left x products right

        for (let i = 0; i < nums.length; i++) {
            solution.push(leftProducts[i] * rightProductsRightToLeft[i]);
        }

        return solution;
    }
}
