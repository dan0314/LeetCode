/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *      Input: ["flower","flow","flight"]
 *      Output: "fl"
 *
 * Example 2:
 *      Input: ["dog","racecar","car"]
 *      Output: ""
 *      Explanation: There is no common prefix among the input strings.
 *
 */

var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0].length === 0) return;
    let j = 0;
    let prefix = '';

    for (j = 0; j < strs[0].length; j++) { 
        for(let i = 0; i < strs.length - 1; i++){
            if(strs[i][j] !== strs[i + 1][j]) return prefix;
        }
        prefix += strs[0][j];
    }
    return prefix;
};
console.log(
    longestCommonPrefix(["xiaosi", "xiaosi2", "xiaosi46", "xiaosdgfg"])
);
console.log(longestCommonPrefix(["xiaoddsi", "cvfdb", "qwe", "hhgjhg"]));
