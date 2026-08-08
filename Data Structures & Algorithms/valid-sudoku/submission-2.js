class Solution {
    /**
     * @param {character[][]}
     * @return {boolean}
     */


    isValidSudoku(board) {
        
        // O(1) time, O(1) space for a fixed (9 x 9) board
        // O(n^2) time, O(n) space for an (n x n) board

        let tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        function resetTracker() {
            for (let i = 0; i < tracker.length; i++) {
                tracker[i] = 0;
            }
        }

        // Check every row

        for (let rIdx = 0; rIdx < 9; rIdx++) {
            for (let cIdx = 0; cIdx < 9; cIdx++) {
                let char = board[rIdx][cIdx];
                if (char !== ".") {
                    let num = Number(char);
                    if (tracker[num] === 1) return false;
                    else tracker[num] += 1;
                }
            }
            resetTracker();
        }

        // Check every column

        for (let cIdx = 0; cIdx < 9; cIdx++) {
            for (let rIdx = 0; rIdx < 9; rIdx++) {
                let char = board[rIdx][cIdx];
                if (char !== ".") {
                    let num = Number(char);
                    if (tracker[num] === 1) return false;
                    else tracker[num] += 1;
                }
            }
            resetTracker();
        }

        // Check every sub-grid

        for (let rIdx = 0; rIdx < 9; rIdx += 3) {
            for (let cIdx = 0; cIdx < 9; cIdx += 3) {
                for (let innerRIdx = rIdx; innerRIdx < rIdx + 3; innerRIdx++) {
                    for (let innerCIdx = cIdx; innerCIdx < cIdx + 3; innerCIdx++) {
                        let char = board[innerRIdx][innerCIdx];
                        if (char !== ".") {
                            let num = Number(char);
                            if (tracker[num] === 1) return false;
                            else tracker[num] += 1;
                        }
                    }
                }
                resetTracker();
            }
        }
        return true;
    }
}
