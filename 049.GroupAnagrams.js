/**
 * Given an array of strings, group anagrams together.
 * Example:
 *      Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 *      Output:
 *      [
 *          ["ate","eat","tea"],
 *          ["nat","tan"],
 *          ["bat"]
 *      ]
 * Note:
 *  All inputs will be in lowercase.
 *  The order of your output does not matter.
 */


var groupAnagrams = function (strs) {
    let r = {};
    for (const str of strs) {
        // 讲个鬼故事 str.split('') 换成 Array.from(str) 慢 20ms sort() 换成 sort((a, b) => a.localeCompare(b)) 再慢20ms
        const sortStr = str.split('').sort().join();
        let sortList = r[sortStr];
        if (!sortList)
            r[sortStr] = sortList = [];
        sortList.push(str);
    }
    return Object.values(r);
};
