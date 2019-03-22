/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * 
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 * ]
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arr = [];
    generate('', arr, n, n)
    return arr;

};

function generate(str, arr, left, right) {
    if (left > right) return false;

    if (left === 0 && right === 0) {
        arr.push(str);
    } else {
        if (left > 0) generate(`${str}(`, arr, left - 1, right);
        if (right > 0) generate(`${str})`, arr, left, right - 1);
    }
}