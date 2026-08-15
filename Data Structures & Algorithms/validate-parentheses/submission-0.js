class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {

        // O(n) time, O(n) space, where n = length of string s

        if (s.length % 2 !== 0) return false;

        let stack = [];

        for (const p of s) {

            if (p === "(" || p === "{" || p === "[") {
                stack.push(p);
            } else {
                let t = stack.pop();
                if (t === undefined) return false
                if (p === ")" && t !== "(") return false;
                if (p === "}" && t !== "{") return false;
                if (p === "]" && t !== "[") return false;
            }
        }

        if (stack.length > 0) return false;
        return true;
    }
}