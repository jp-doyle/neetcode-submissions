class Solution {

    /**
     * @param {character[][]} board
     * @return {boolean}
     */


    isValidSudoku(board) {

        // O(1) time, O(1) space for a (9 x 9) board
        // O(n^2) time, O(n^2) space for a (n x n) board
        
        // Generate hash tables of hash tables for each row, column, and sub-grid

        let rows = {};
        let columns = {};
        let subGrids = {};

        for (let i = 0; i < 9; i++) {
            rows[i] = {};
            columns[i] = {};
        }

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                subGrids[i.toString() + j.toString()] = {};
            }
        }

        // Populate and check the hash tables for two instances of a number

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j];
                if (num !== ".") {
                    if (num in rows[i]) return false;
                    else rows[i][num] = true;

                    if (num in columns[j]) return false;
                    else columns[j][num] = true;

                    let topLeftBoxRowIdx = (Math.floor(i / 3) * 3).toString();
                    let topLeftBoxColIdx = (Math.floor(j / 3) * 3).toString();
                    let subGridsKey = topLeftBoxRowIdx.toString() + topLeftBoxColIdx.toString();

                    if (num in subGrids[subGridsKey]) return false;
                    else subGrids[subGridsKey][num] = true;
                }
            }
        }
        return true;
    }
}
