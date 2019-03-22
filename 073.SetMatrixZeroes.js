/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    if (matrix.length === 0) return false;

    const column = new Set();
    const rows = new Set();

    matrix.forEach((row, cIndex) => {
        row.forEach((item, index) => {
            if (item === 0) {
                column.add(cIndex);
                rows.add(index);
            }
        });
    });

    column.forEach((col) => {
        matrix[col] = matrix[col].map((item) => item = 0);
    });

    rows.forEach((row) => {
        matrix = matrix.map((r) => {
            r[row] = 0;
            return r;
        });
    });
    return matrix;
};