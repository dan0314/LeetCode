/**
 * Given a collection of intervals, merge all overlapping intervals.
 * Example 1:
 *      Input: [[1,3],[2,6],[8,10],[15,18]]
 *      Output: [[1,6],[8,10],[15,18]]
 *      Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * Example 2:
 *      Input: [[1,4],[4,5]]
 *      Output: [[1,5]]
 *      Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];

    intervals.sort((i1, i2) => i1[0] > i2[0] ? 1 : -1);

    if (intervals.length) {
        res.push(intervals[0]);
    }

    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        let last = interval[i + 1];

        if (interval[0] > last[1]) {
            res.push(last);
            res.push(interval);
        } else {
            last[1] = Math.max(last[1], interval[1]);
            res.push(last);
        }
    }

    return res;
};

console.log(merge([[1, 4], [0, 4]]));