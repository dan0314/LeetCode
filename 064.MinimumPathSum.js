/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * Example:
 *      Input:
 *       [
 *          [1,3,1],
 *          [1,5,1],
 *          [4,2,1]
 *       ]
 *      Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let h = grid.length;
    let w = grid[0].length;
    let num = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j + 1] > grid[i + 1][j]) {
                num += grid[i + 1][j];
            } else {
                num += grid[i][j + 1];
            }
        }
    }

};

