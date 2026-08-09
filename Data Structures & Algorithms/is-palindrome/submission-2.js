class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {

        // O(n) time, O(1) space, where n = length of string

        const lcS = s.toLowerCase();
        let lIdx = 0;
        let rIdx = s.length - 1;

        // Iterate through string with two pointers, while right is greater than left

        while (rIdx > lIdx) {

            // If either pointer encounters a non-alphanumeric, advance it

            while (!this.isAlphaNumeric(lcS[lIdx])) {
                lIdx += 1;
                if (lIdx > lcS.length - 1) break
            }
            while (!this.isAlphaNumeric(lcS[rIdx])) {
                rIdx -= 1;
                if (rIdx < 0 ) break
            }

            // If the characters aren't equivalent, return false

            if (rIdx > lIdx && lcS[lIdx] !== lcS[rIdx]) return false;

            lIdx += 1;
            rIdx -= 1;
        }
        return true;
    }

    isAlphaNumeric(char) {
        if ("a" <= char && char <= "z") return true;
        if ("0" <= char && char <= "9") return true;
        return false;
    }
}
