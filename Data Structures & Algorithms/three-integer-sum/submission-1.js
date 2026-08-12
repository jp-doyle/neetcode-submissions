class Solution {

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    threeSum(nums) {

        // O(n^2) time, O(1) space, where n = length of nums array

        let sortedNums = nums.sort((a,b) => a - b)
        let solutions = []
        let idx1 = 0
        let idx3 = sortedNums.length - 1
        let lastNum = null

        while (idx1 <= idx3 - 2) {

            if (sortedNums[idx1] === lastNum) {
                idx1 += 1
                continue
            }

            let idx2 = idx1 + 1
            let innerIdx3 = idx3
            let innerLastNum = null

            while (idx2 < innerIdx3) {

                if (sortedNums[idx2] === innerLastNum) {
                    idx2 += 1 
                    continue
                }
                
                let sum = sortedNums[idx1] + sortedNums[idx2] + sortedNums[innerIdx3]

                if (sum === 0) {
                    let solution = [sortedNums[idx1], sortedNums[idx2], sortedNums[innerIdx3]]
                    solutions.push(solution)
                    innerLastNum = sortedNums[idx2]
                    idx2 += 1
                    innerIdx3 -= 1
                }
                if (sum < 0) idx2 += 1
                if (sum > 0) innerIdx3 -= 1
            }

            lastNum = sortedNums[idx1]
            idx1 += 1
        }
        return solutions
    }
}
