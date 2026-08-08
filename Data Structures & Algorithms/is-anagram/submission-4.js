class Solution {

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {

        // O(n + m) time, O(1) space

        if (s.length !== t.length) return false

        let hashTable = {}
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] in hashTable) {
                hashTable[s[i]] += 1
            } else {
                hashTable[s[i]] = 1    
            }

            if (t[i] in hashTable) {
                hashTable[t[i]] -= 1
            } else {
                hashTable[t[i]] = -1
            }
        }

        for (const key in hashTable) {
            if (hashTable[key] !== 0) {
                return false
            }
        }

        return true
    }
}
